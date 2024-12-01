function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

let isLogged = getQueryParam('LoggedIn') === '1';
let navBar = document.getElementsByClassName("navbar")[0];
let shareButton = document.getElementsByClassName("share")[0];
let buttons = document.getElementsByClassName("tbtn");

document.addEventListener("DOMContentLoaded", function() {
    let pic = document.getElementById("pic");
    let file = document.getElementById("dp");
    let locationInput = document.getElementById("location");
    let map = document.getElementsByClassName("map")[0];

    // Function to display the uploaded image
    function displayImage() {
        let file = document.getElementById("dp").files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function(e) {
                pic.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }

    // Function to update the static map location
    function updateMapLocation() {
        let location = locationInput.value;
        if (location) {
            let encodedLocation = encodeURIComponent(location);
            map.src = encodedLocation;
        }
    }

    // Event listeners
    file.addEventListener("change", displayImage);
    locationInput.addEventListener("input", updateMapLocation);
});

function buttonStatus(){
    buttons[0].disabled = isLogged;
    buttons[1].disabled = isLogged;
}
window.onload = function(){
    buttonStatus();
}


function isNavBarVisible() {
    let rect = navBar.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}
function adjustShareButton() {
    if (isNavBarVisible()) {
        shareButton.style.top = "10%";
    } else {
        shareButton.style.top = "1%";
    }
}
window.addEventListener("scroll", adjustShareButton);
adjustShareButton();

function gotoSharePage1(){
    if(isLogged){
        window.location = 'Assets/Pages/ShareLocationPage.html';
    }
    else{
        window.alert("Please log in first");
        window.location = 'Assets/Pages/SignUpPage.html';
    }
}
function gotoSharePage2(){
    if(isLogged){
        window.location = '../Pages/ShareLocationPage.html';
    }
    else{
        window.location = '../Pages/SignUpPage.html';
    }
}