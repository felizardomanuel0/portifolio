$(function () {
    'use strict';

    const forms = $('.needs-validation');

    forms.on('submit', function (event) {
        const form = $(this);

        var actionInput = $(this).find("input[name='action']");

        if (!form[0].checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            $('.submit_form').html('Enviando...');
            $('.btn_submit-subscribe').html('Enviando...');
            const toast = new bootstrap.Toast($('.success_msg')[0]);
            const errtoast = new bootstrap.Toast($('.error_msg')[0]);
            var formData = forms.serialize();
            $.ajax({
                type: "POST",
                url: "php/form_process.php",
                data: formData,
                success: function (response) {
                    if (response == 'success') {
                        if (actionInput.length > 0) {
                            $('.btn_submit-subscribe').html('Subscrever');
                            const toast_subscribe = new bootstrap.Toast($('.success_msg_subscribe')[0]);
                            toast_subscribe.show();
                        } else {
                            toast.show()
                            $('.submit_form').html('Enviar mensagem');                            
                        }

                    } else {
                        errtoast.show()
                        $('.submit_form').html('Enviar mensagem');
                        $('.btn_submit-subscribe').html('Subscrever');
                    }
                }
            });
        }

        form.addClass('was-validated');
    });
});