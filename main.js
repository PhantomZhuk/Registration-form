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
    $(`.loginPlaceholder`).css({
        'margin-top': '20px',
        'padding': '0px',
        'margin-left': '30px'
    })
});

$(`.emailPlaceholder`).click(() => {
    $(`#emailInput`).focus();
});

$(`#emailInput`).focus(() => {
    $('.emailPlaceholder').css({
        'margin-top': '50px',
        'padding': '5px',
        'margin-left': '20px'
    });
});

$(`#emailInput`).blur(() => {
    $(`.emailPlaceholder`).css({
        'margin-top': '75px',
        'padding': '0px',
        'margin-left': '30px'
    })
});

$(`.passwordPlaceholder`).click(() => {
    $(`#passwordInput`).focus();
});

$(`#passwordInput`).focus(() => {
    $('.passwordPlaceholder').css({
        'margin-top': '105px',
        'padding': '5px',
        'margin-left': '20px'
    });
});

$(`#passwordInput`).blur(() => {
    $(`.passwordPlaceholder`).css({
        'margin-top': '130px',
        'padding': '0px',
        'margin-left': '30px'
    })
});