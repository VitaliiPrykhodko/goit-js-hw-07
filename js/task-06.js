const onElInput = document.querySelector('#validation-input')

onElInput.addEventListener('change', changeBorderColor)

function changeBorderColor(even) {
    const dataValue = Number(onElInput.dataset.length)
    if (dataValue !== even.currentTarget.value.length) {
    return  onElInput.classList.add('invalid')
    }
   
     return onElInput.classList.replace('invalid', 'valid')
    
}

