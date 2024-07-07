$(`.loginPlaceholder`).click(() => {
    $(`#loginInput`).focus();
});

$(`#loginInput`).focus(() => {
    $('.loginPlaceholder').css({
        'margin-top': '-5px',
        'padding': '5px',
        'margin-left': '20px'
    });
});

$(`#loginInput`).blur(() => {
    if($(`#loginInput`).val().length < 1){
        $(`.loginPlaceholder`).css({
            'margin-top': '20px',
            'padding': '0px',
            'margin-left': '30px'
        })
    }
});

$(`.emailPlaceholder`).click(() => {
    $(`#emailInput`).focus();
});

$(`#emailInput`).focus(() => {
    $('.emailPlaceholder').css({
        'margin-top': '55px',
        'padding': '5px',
        'margin-left': '20px'
    });
});

$(`#emailInput`).blur(() => {
    if($(`#emailInput`).val().length < 1){
        $(`.emailPlaceholder`).css({
            'margin-top': '80px',
            'padding': '0px',
            'margin-left': '30px'
        })
    }
});

$(`.passwordPlaceholder`).click(() => {
    $(`#passwordInput`).focus();
});

$(`#passwordInput`).focus(() => {
    $('.passwordPlaceholder').css({
        'margin-top': '115px',
        'padding': '5px',
        'margin-left': '20px'
    });
});

$(`#passwordInput`).blur(() => {
    if($(`#passwordInput`).val().length < 1){
        $(`.passwordPlaceholder`).css({
            'margin-top': '140px',
            'padding': '0px',
            'margin-left': '30px'
        })
    }
});

$(`.viewPassword`).click(()=>{
    if ($(`.viewPassword`).hasClass('fa-eye-slash')) {
        $(`.viewPassword`).removeClass('fa-eye-slash').addClass('fa-eye');
        $(`#passwordInput`).attr('type', 'text');
    } else if ($(`.viewPassword`).hasClass('fa-eye')) {
        $(`.viewPassword`).removeClass('fa-eye').addClass('fa-eye-slash');
        $(`#passwordInput`).attr('type', 'password');
    }
});