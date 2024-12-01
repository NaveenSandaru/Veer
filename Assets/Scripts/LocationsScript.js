
function Imginfo(imageSrc, locationText, rowIndex, locationText1) {
    var background = document.getElementById('background');
    var information = document.getElementById('information');
    var infoImage = document.getElementById('TImage');
    var infoText = document.getElementById('TText');
    var infoText1 = document.getElementById('TText1');
    var reviews = document.getElementById('reviews');

    background.classList.add('blur-effect');
    background.style.position = 'fixed';
    infoImage.src = "../Images/LocationsPage/" + imageSrc;
    infoText.textContent = locationText;
    infoText1.textContent = locationText1;
    if (!reviews.innerHTML.trim()) {
        reviews.innerHTML = `<p>No reviews yet. Be the first to add a review!</p>`;
    }
    if (rowIndex === 1) {
        information.style.top = '30%';
    } else if (rowIndex === 2) {
        information.style.top = '30%';
    } else {
        information.style.top = '100%';
    }
    information.style.display = 'block';
}
function closeInfo() {
    var background = document.getElementById('background');
    var information = document.getElementById('information');
    background.classList.remove('blur-effect');
    information.style.display = 'none';
    background.style.position = 'relative';
}

function addReview() {
    var reviews = document.getElementById('reviews');
    var newReviewText = document.getElementById('new-review').value;
    if (newReviewText.trim()) {
        if (reviews.innerHTML.includes("No reviews yet")) {
            reviews.innerHTML = '';
        }
        reviews.innerHTML += `<p>${newReviewText}</p>`;
        reviewsData[infoImage.src.split('/').pop()].push(newReviewText);
        document.getElementById('new-review').value = '';
    } else {
        alert("Please write a review before submitting.");
    }
}
