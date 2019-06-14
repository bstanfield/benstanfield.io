document.addEventListener('DOMContentLoaded', () => {
    const $ = require('jquery');

    $(document).ready(function () {
        $('.button-clicker').click(() => {
            const psw = document.getElementById('password').value;
            const api_url = `https://${psw}.benstanfield.io`;
            $.ajax({
                url: api_url,
                success: function (xhr) {
                    $('#password').css('border-color', '#5cc624').css('background-color', '#e7f4df');
                    location.href = `https://${psw}.benstanfield.io`;
                },
                error: function (xhr) {
                    $('#password').val('').attr('placeholder', 'Invalid secret code');
                    $('#password').css('border-color', '#f2b7b1').css('background-color', '#f9ebea');
                }
            });
        })

        $(function () {
            $(".input-container input").keypress(function (e) {
                if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
                    $('.button-clicker .orangebutton').click();
                    return false;
                } else {
                    return true;
                }
            });
        });
    });
});