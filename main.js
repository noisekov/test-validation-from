const passwordUp = document.querySelector('.js-password-up');
const passwordDown = document.querySelector('.js-password-down');
const passwordShow = document.querySelector('.login__password-show');
const btnChange = document.querySelector('.js-change-password');
const controlWord = document.querySelector('.js-control-word');
const allLabel = document.querySelectorAll('.login__label');



passwordShow.addEventListener('mousedown', showPassword);
passwordShow.addEventListener('mouseup', hiddenPassword);
passwordShow.addEventListener('touchstart', showPassword);
passwordShow.addEventListener('touchend', hiddenPassword);

function showPassword () {
    passwordUp.setAttribute('type', 'text');
}

function hiddenPassword () {
    passwordUp.setAttribute('type', 'password');
}

let isCreate = true;
let isMoreSix = true;
let isLengthPassword = true;

btnChange.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (controlWord.value.length > 15) {
        const span = document.createElement('span');
        if(isCreate) {
            span.classList.add('check-control-word');
            span.textContent = "Неверное контрольное слово";
            allLabel[1].after(span);
            isCreate = false;
        } 
    } else {
        if(!isCreate) {
            const findControl = document.querySelector('.check-control-word')
            findControl.remove();
            isCreate = true;
        }
    }
    if (passwordUp.value.length < 6) {
        const span = document.createElement('span');
        if(isMoreSix) {
            span.classList.add('check-length-password');
            span.textContent = "Пароль должен быть не менее 6 символов";
            allLabel[2].after(span);
            isMoreSix = false;
        } 
    } else {
        if(!isMoreSix) {
            const findPassowrdLength = document.querySelector('.check-length-password')
            findPassowrdLength.remove();
            isMoreSix = true;
        }
    }
    if (passwordUp.value !== passwordDown.value) {
        const span = document.createElement('span');
        if(isLengthPassword) {
            span.classList.add('check-the-same-password');
            span.textContent = "Пароли не совпадают";
            allLabel[3].after(span);
            isLengthPassword = false;
        } 
    } else {
        if(!isLengthPassword) {
            const findTheSamePassword = document.querySelector('.check-the-same-password')
            findTheSamePassword.remove();
            isLengthPassword = true;
        }
    }
})
