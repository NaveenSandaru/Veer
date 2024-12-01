function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

if (getQueryParam('error') === '1') {
    document.getElementById('loginError').style.display = 'block';
    const newUrl = window.location.href.split('?')[0];
    window.history.replaceState({}, document.title, newUrl);
}
else if (getQueryParam('error') === '2') {
    window.alert("User already signed up");
    const newUrl = window.location.href.split('?')[0];
    window.history.replaceState({}, document.title, newUrl);
}

let cover = document.getElementsByClassName('cover');
let coverHeader = document.getElementsByClassName('coverHeader');
let content = document.getElementsByClassName('content');
let body = document.getElementById('bod');
let bool = false;
let login = document.getElementsByClassName('login');
let signup = document.getElementsByClassName('signup');
let password1 = document.getElementById('password1');
let password2 = document.getElementById('password2');
let phoneNum = document.getElementById('number');
let registerButton = document.getElementById('regButton');

function switchToSignUp() {
    document.getElementById('title').innerHTML = "Sign Up";
    cover[0].style.left = '0px';
    cover[0].style.borderTopLeftRadius = '3vh';
    cover[0].style.borderBottomLeftRadius = '3vh';
    cover[0].style.borderBottomRightRadius = '0vh';
    cover[0].style.borderTopRightRadius = '0vh';
    cover[0].style.background = 'url("../Images/SignUpPage/signupCover2.jpg")';
    cover[0].style.backgroundSize = 'cover';
    content[0].style.backgroundColor = '#0e2c0e'
    body.style.background = 'linearGradient(#114432, #0e2c0e)';
    coverHeader[0].innerHTML = 'Log in';
    coverHeader[0].style.right = '-6vh';
    coverHeader[0].style.width = '10vh';
    bool = false;
}

function switchToLogin() {
    document.getElementById('title').innerHTML = "Log In";
    cover[0].style.left = '75vh';
    cover[0].style.borderTopRightRadius = '3vh';
    cover[0].style.borderBottomRightRadius = '3vh';
    cover[0].style.borderBottomLeftRadius = '0vh';
    cover[0].style.borderTopLeftRadius = '0vh';
    cover[0].style.background = 'url("../Images/SignUpPage/signupCover1.jpg")';
    cover[0].style.backgroundSize = 'cover';
    content[0].style.backgroundColor = '#114432'
    body.style.background = 'linearGradient(#0e2c0e, #114432)';
    coverHeader[0].innerHTML = 'Sign up';
    coverHeader[0].style.right = '69vh';
    coverHeader[0].style.width = '10vh';
    bool = true;
}
function switchSide() {
    if (bool) {
        switchToSignUp();
    } else {
        switchToLogin();
    }
}

function getSignUp() {
    login[0].style.left = '-100vh';
    signup[0].style.right = '12%';
    signup[0].style.left = 'auto';

}
function getLogIn() {
    login[0].style.left = '12%';
    signup[0].style.right = '-100vh';
    signup[0].style.left = 'auto';
}

function validatePassword() {
    if (password1.value != password2.value) {
        registerButton.disabled = true;
    }
    else {
        registerButton.disabled = false;
    }
}

function validatePhone() {
    if (isNaN(phoneNum.value)) {
        registerButton.disabled = true;
    } else {
        registerButton.disabled = false;
    }
}
window.onload = function () {

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('error') == 1) {
        switchSide();
        document.getElementById('loginError').style.display = 'block';
        const newUrl = window.location.href.split('?')[0];
        window.history.replaceState({}, document.title, newUrl);
    }
}
