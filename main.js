$(function () {
    let form = $("form[name='registration']");

    form.validate({
        rules: {
            fullname: 'required',
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            fullname: 'Please enter your full name',
            email: 'Please enter your email'
        },
        submitHandler: function (form) {
            form.submit();
        }
    })
})