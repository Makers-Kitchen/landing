
$(document).ready(function () {
    $("#schwag_panel").hide();
    check_integration();
});

var tgz_ur;
var tgz_em = "";

function check_integration() {
    var slack_code = getParam('code');
    if (slack_code != null && slack_code.length > 0) {
        var params = { code: slack_code, client_id: '394441928593.396969396612', client_secret: '3f784f023492c5543a976ee851f71653' }
        $.post('https://slack.com/api/oauth.access', params,
            function (response) {
                if (response.error == null) {
                    var tgz_idn = response.team.id;
                    tgz_ur = response.user.name;
                    if (response.user.email != null && response.user.email.length > 0) {
                        tgz_em = response.user.email;
                    }

                    if (tgz_idn == "TBLCZTAHF") {
                        $("#schwag_panel").show();
                        document.getElementById("schwagger").innerHTML = 'Hey ' + tgz_ur + '! <span style="font-size: 20px; margin: 10px;"><i class="em em-smiley"></i> <i class="em em-wave"></i></span>';

                        $('html, body').animate({
                            scrollTop: $("#schwag_panel").offset().top
                        }, 1000);
                    }
                }
                else {
                    if (response.error == "code_already_used") {
                        window.location = 'stickers';
                    }
                }
            }
        );
    }
}

function getParam(param) {
    return new URLSearchParams(window.location.search).get(param);
}

function request() {
    var address = document.getElementById("txtAddress").value;
    if (address.length > 0) {

        const firestore = firebase.firestore();
        const settings = { timestampsInSnapshots: true };
        firestore.settings(settings);

        var db = firebase.firestore();
        var doc_id = db.collection("sticker_deliveries").doc().id;
        db.collection("sticker_deliveries").doc(doc_id).set({
            name: tgz_ur,
            email: tgz_em,
            address: address
        }).then(function () {
            swal("Stickers are on the way! 🚚", "We'll ship these out with the next batch of deliveries. Hope you like the schwaagg!", "success");
        }).catch(function (error) {
            console.error("Error writing document: ", error);
        });
    }
    else {
        swal("Delivery Address Required 🤔", "Tell us the address the stickers need to be delivered to", "error");
    }
}