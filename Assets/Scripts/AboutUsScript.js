document.getElementById('learn-more-btn').addEventListener('click', function() {
    document.getElementsByClassName('blur-container')[0].classList.add('blurred');
    document.getElementById('popup-modal').style.display = 'flex';
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementsByClassName('blur-container')[0].classList.remove('blurred');
    document.getElementById('popup-modal').style.display = 'none';
});

document.getElementById('show-less-btn').addEventListener('click', function() {
    document.getElementsByClassName('blur-container')[0].classList.remove('blurred');
    document.getElementById('popup-modal').style.display = 'none';
});
