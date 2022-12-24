const button = document.querySelector('.header__btn');

function getQuote() {
    fetch('http://api.kanye.rest/')
        .then((response) => response.json())
        .then((data) =>
            (document.querySelector('.quote').textContent = data.quote)
        );
}

button.addEventListener('click', getQuote); 