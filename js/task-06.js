const onElInput = document.querySelector('#validation-input')

onElInput.addEventListener('blur', changeBorderColor)

function changeBorderColor(even) {
    let dataValue = Number(onElInput.dataset.length)
    onElInput.classList.add('invalid');
    if (dataValue === even.currentTarget.value.length) {
        onElInput.classList.replace('invalid', 'valid')
    } else {
        onElInput.classList.replace('valid', 'invalid')
    }
}

