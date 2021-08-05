const onElInput = document.querySelector('#name-input');
const onElSpan = document.querySelector('#name-output')

onElInput.addEventListener('input', getNameInput)

function getNameInput(even) {
    onElSpan.textContent = even.currentTarget.value;
}
