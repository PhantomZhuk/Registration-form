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
    if ($(`#loginInput`).val().length < 1) {
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
    if ($(`#emailInput`).val().length < 1) {
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
    if ($(`#passwordInput`).val().length < 1) {
        $(`.passwordPlaceholder`).css({
            'margin-top': '140px',
            'padding': '0px',
            'margin-left': '30px'
        })
    }
});

$(`.viewPassword`).click(() => {
    if ($(`.viewPassword`).hasClass('fa-eye-slash')) {
        $(`.viewPassword`).removeClass('fa-eye-slash').addClass('fa-eye');
        $(`#passwordInput`).attr('type', 'text');
    } else if ($(`.viewPassword`).hasClass('fa-eye')) {
        $(`.viewPassword`).removeClass('fa-eye').addClass('fa-eye-slash');
        $(`#passwordInput`).attr('type', 'password');
    }
});

let checkColor = `#a7c957`;

$(`#loginInput`).on(`input`, () => {
    let login = $(`#loginInput`).val();
    $('.check1, .check2').css('color', '');

    if (login.length >= 4) {
        $(`.check1`).css(`color`, checkColor);
    }

    if (!/\s/g.test(login)) {
        $(`.check2`).css(`color`, checkColor);
    }
});





$(`#passwordInput`).on(`input`, () => {
    let password = $(`#passwordInput`).val();

    $(`.check4, .check5, .check6, .check7, .check8`).css(`color`, ``);

    if (password.length >= 8 && password.length <= 12) {
        $(`.check4`).css(`color`, checkColor);
    }

    if (/[!@#$%^&*()_+\-=\|?/><.,`~]/g.test(password)) {
        $(`.check5`).css(`color`, checkColor);
    }

    if (/[A-Z]/g.test(password)) {
        $(`.check6`).css(`color`, checkColor);
    }

    if (/[a-z]/g.test(password)) {
        $(`.check7`).css(`color`, checkColor);
    }

    if (/[0-9]/g.test(password)) {
        $(`.check8`).css(`color`, checkColor);
    }
});

$(`#settingsBtn`).click(() => {
    $(`#settingsBtn`).css(`display`, `none`)

    $(`.settingsContainer`).css({
        'position': `absolute`,
        'width': `300px`,
        'height': `100px`,
        'margin-left': `25px`,
        'margin-bottom': `70px`,
        'display': `flex`,
        'flex-direction': `column`,
        'justify-content': `space-between`,
        'align-items': `center`,
        'box-shadow': '0 3px 10px #333',
        'padding': '10px',
        'background-color': '#3a5a40'
    });

    $(`.settingsContainer`).append(`
            <div class="settingsHeader">
                <i class="fa-solid fa-xmark"></i>
            </div>
            <div class="toggleBtn">
                <div class="chosenBox"></div>
                <div class="regular">Regular</div>
                <div class="withoutRegular">Without regular</div>
            </div>
        `)
});

$(`.settingsContainer`).on(`click`, `.fa-xmark`, () => {
    $(`#settingsBtn`).css({
        'display': 'flex',
        'padding': '8px 10px'
    });
    $(`.settingsContainer`).css({
        'position': `relative`,
        'width': `37px`,
        'height': `32px`,
        'border-radius': '5px',
        'border': 'none',
        'background-color': '#588157',
        'color': '#fff',
        'margin-left': `0px`,
        'margin-bottom': `0px`,
        'display': `flex`,
        'justify-content': `center`,
        'align-items': `center`,
        'padding': '8px 10px',
        'box-shadow': 'none',
    });
    $(`.settingsHeader`).remove();
    $(`.toggleBtn`).remove();
});

$(`.settingsContainer`).on(`click`, `.regular`, () => {
    $(`.chosenBox`).css({
        'width': `100px`,
        'height': `40px`,
        'margin-left': `0px`,
    });
});

$(`.settingsContainer`).on(`click`, `.withoutRegular`, () => {
    $(`.chosenBox`).css({
        'width': `120px`,
        'height': `40px`,
        'margin-left': `140px`,
    });
});