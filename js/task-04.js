const counterValue = document.querySelector('#value')
const btnIncrement = document.querySelector('[data-action="increment"]')
const btnDecrement = document.querySelector('[data-action="decrement"]')
let onValue = 0

function increment() {
     counterValue.textContent = onValue += 1;
}

function decrement() {
    counterValue.textContent = onValue -= 1;
}

btnIncrement.addEventListener('click', increment);
btnDecrement.addEventListener('click', decrement);

