const counterValue = document.querySelector('#value')
const btnIncrement = document.querySelector('[data-action="increment"]')
const btnDecrement = document.querySelector('[data-action="decrement"]')

function increment() {
     counterValue.textContent = Number(counterValue.textContent) + 1;
}

function decrement() {
    counterValue.textContent = Number(counterValue.textContent) - 1;
}

btnIncrement.addEventListener('click', increment);
btnDecrement.addEventListener('click', decrement);
