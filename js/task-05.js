const onElInput = document.querySelector('#name-input');
const onElSpan = document.querySelector('#name-output')

onElInput.addEventListener('input', getNameInput)


function getNameInput(event) {
  const input = event.currentTarget;

  onElSpan.textContent = input.value ? input.value : 'незнайомець';
}