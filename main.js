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

let checkColor = `#6dc54a`;

$(`#passwordInput`).on(`input`, ()=>{
    let password = $(`#passwordInput`).val();

    $(`.check3, .check4, .check5, .check6, .check7`).css(`color`, ``);

    if (password.length >= 8 && password.length <= 12){
        $(`.check3`).css(`color`, checkColor);
    }

    if (/[!@#$%^&*()_+\-=\|?/><.,`~]/g.test(password)){
        $(`.check4`).css(`color`, checkColor);
    }

    if (/[A-Z]/g.test(password)){
        $(`.check5`).css(`color`, checkColor);
    }

    if (/[a-z]/g.test(password)){
        $(`.check6`).css(`color`, checkColor);
    }

    if (/[0-9]/g.test(password)){
        $(`.check7`).css(`color`, checkColor);
    }
});