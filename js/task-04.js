let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

function onDecrementClick() {
        counterValue -= 1;
    valueEl.textContent = counterValue;
}
function onIncrementClick() {
        counterValue += 1;
    valueEl.textContent = counterValue;
}

decrementBtn.addEventListener('click', onDecrementClick);
incrementBtn.addEventListener('click', onIncrementClick);