
function join_slack() {
    var email = $('#page_controls_email').val();
    if (email.length > 0) {
        send_invite(email);
    }
    else {
        notie.alert(2, 'Enter your email address 👇', 3);
    }
}

function join_slack2() {
    var email = $('#page_controls_email_2').val();
    if (email.length > 0) {
        send_invite(email);
    }
    else {
        notie.alert(2, 'Enter your email address 👇', 3);
    }
}

function open_makerlog() {
    window.open('https://getmakerlog.com', '_blank').focus();
}

function send_invite(email) {
    if (email.length > 0) {
        //temporarily saving for backup invitation service
        firebase.auth().createUserWithEmailAndPassword(email, "3245twcwe23432x4g5").catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });

        var token = 'xoxp-394441928593-394981941026-481069668052-1e3d78c9a4d93dccb8e148a8650c7f4f';

        $.ajax({
            dataType: 'json',
            processData: false,
            type: 'POST',
            url: 'https://slack.com/api/users.admin.invite?token=' + token + '&email=' + email,
            success: function (msg) {
                console.log(msg);
                if (msg.error == "already_invited") {
                    notie.alert(1, 'An invitation to this email has already been sent 😃 👌', 5);
                    return;
                }
                if (msg.error == "invalid_email") {
                    notie.alert(3, 'Email seems invalid 🤔', 5);
                }
                if (msg.error == "already_in_team") {
                    notie.alert(1, 'You are already in the community. Visit https://makers-kitchen.slack.com 😃', 5);
                    return;
                }
                notie.alert(1, 'Invitation sent! Check your Email 😃', 5);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                notie.alert(3, errorThrown, 3);
            }
        });
    }
}