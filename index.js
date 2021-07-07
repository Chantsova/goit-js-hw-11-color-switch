import { colors } from './js/colors.js'

const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

function startColorRandomize(event) {
    startBtn.setAttribute('disabled', true);
    const intervalRandomizer = setInterval(changeColor, 1000, 1000);
    
    stopBtn.addEventListener('click', stopColorRandomize);

    function stopColorRandomize(event) {
        startBtn.removeAttribute('disabled');
        clearInterval(intervalRandomizer);
    }
}

function changeColor() {
    const maxNumberOfColors = colors.length-1;
    bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, maxNumberOfColors)];
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener('click', startColorRandomize);