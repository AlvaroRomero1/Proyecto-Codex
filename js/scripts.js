let nav = document.querySelector('.headerMenu');
document.querySelector('.button').addEventListener('click', function () {
    nav.classList.toggle('active');
});

let button = document.getElementById("button");

function myFunction(x) {
    button.classList.toggle("change-button");
    x.classList.toggle("change");
}

