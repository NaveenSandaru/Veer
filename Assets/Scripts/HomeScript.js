let menuItems = document.getElementsByClassName("menuItem");
let hero = document.getElementsByClassName("hero")[0];
let i = 0;


function gotoSignUp() {
    window.location = "Assets/Pages/SignUpPage.html";
}

function change() {
    setInterval(() => {
        changeCover();
    }, 5000);
}

function changeCover() {
    setTimeout(() => {
        let firstMenuItemImage = menuItems[0].getElementsByTagName('img')[0].src;
        hero.style.backgroundImage = `url(${firstMenuItemImage})`;
        for (let i = 0; i < menuItems.length - 1; i++) {
            let currentImage = menuItems[i].getElementsByTagName('img')[0];
            let nextImage = menuItems[i + 1].getElementsByTagName('img')[0].src;
            currentImage.style.opacity = '0';
            setTimeout(() => {
                currentImage.src = nextImage;
                currentImage.style.opacity = '1';
            }, 100);
        }
        let lastMenuItemImage = menuItems[menuItems.length - 1].getElementsByTagName('img')[0];
        lastMenuItemImage.style.opacity = '0';
        setTimeout(() => {
            lastMenuItemImage.src = firstMenuItemImage;
            lastMenuItemImage.style.opacity = '1';
        }, 500);
    }, 500);
}



window.onload = function() {
    change();
};
