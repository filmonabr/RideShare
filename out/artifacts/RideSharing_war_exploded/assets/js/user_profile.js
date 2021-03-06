$(function () {
    $('#update_profile').on('click', doRequest);
});

function doRequest() {
    $.ajax("/updateInfo", { "type": "POST",
        "data": {
            "name": $('#user_name').val(),
            "address": $('#user_address').val(),
            "email": $('#user_email').val(),
            "tel": $('#user_tel').val()
        }
    }).done(updateProfileSucess)
        .fail(updateProfileFail);
}

function updateProfileSucess() {
    $.notify({
        icon: 'pe-7s-gift',
        message: "update successful"

    }, {
        type: 'info',
        timer: 500
    });
}

function updateProfileFail() {

}