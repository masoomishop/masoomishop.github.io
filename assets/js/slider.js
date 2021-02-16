"use strict";

//Slider logic
const sliderContainer = document.querySelector('.slider-container');
const sliderCards = Array.from(document.querySelectorAll('.slider-card'));
const cardWidth = sliderCards[0].clientWidth;
let cardAmount = sliderContainer.clientWidth / cardWidth;
let counter;
let toRight;

//The slider Adapts itself to window resize
window.onresize = () => {
    cardAmount = sliderContainer.clientWidth / cardWidth;
    if (cardAmount < 4) {
        counter = 0;
        toRight = false;
    } else {
        counter = -1;
        toRight = false;
    }
}

const setBigSliderCards = (element, index, array) => {
    let position = (index - (counter)) * cardWidth;
    if (position >= cardWidth && position <= ((cardAmount - 2) * cardWidth)) {
        element.classList.remove('hidden');
    }
    element.style.left = `${position}px`;
}

const setSmallSliderCards = () => {
    sliderCards.forEach(x => x.style.left = `calc(50% - ${cardWidth / 2}px)`);
    sliderCards[counter].classList.remove('hidden');
}

const setCounter = (beginOfSlider, endOfSlider) => {
    if (counter.toFixed() === (endOfSlider).toFixed() || counter === beginOfSlider) {
        toRight = !toRight;
    }
    if (toRight) {
        counter++;
    } else {
        counter--;
    }
}

if (cardAmount < 4) {
    counter = 0;
    setSmallSliderCards();
} else {
    counter = -1;
    sliderCards.forEach(setBigSliderCards)
}

setInterval(() => {
    cardAmount = sliderContainer.clientWidth / cardWidth;
    let endOfSlider = (sliderCards.length - cardAmount) + 1;
    sliderCards.forEach(x => x.classList.add('hidden'));

    if (cardAmount < 4) {
        setSmallSliderCards()
        setCounter(0, endOfSlider);
    } else {
        sliderCards.forEach(setBigSliderCards);
        setCounter(-1, endOfSlider);
    }

}, 2000);
