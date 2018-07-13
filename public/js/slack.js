
function join_slack() {
    var email = $('#page_controls_email').val();
    var email2 = $('#page_controls_email_2').val();
    if(email.length > 0) {
        send_invite(email);
    }
    if(email2.length > 0) {
        send_invite(email2);
    }
}

function send_invite(email) {
    if (email.length > 0) {
        $.ajax({
            dataType: 'json',
            processData: false,
            type: 'POST',
            url: 'https://slack.com/api/users.admin.invite?token=xoxp-394441928593-397352076484-398634338967-9695fc8930abc0f738f3f2599dc231e0&email=' + email,
            success: function (msg) {
                notie.alert(1, 'Invitation sent! Check your Email 😃', 5);
                console.log(msg);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                notie.alert(3, errorThrown, 3);
                console.log(errorThrown);
            }
        });
    }
    else {
        notie.alert(2, 'Enter your email address 👇', 3);
    }
}