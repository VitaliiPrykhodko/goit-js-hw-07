const onElInput = document.querySelector('#font-size-control');
const onElSpan = document.querySelector('#text')

onElInput.addEventListener('input', upSizeTextSpan)

function upSizeTextSpan(even) {
    const inputElem = even.target.value;
    
    onElSpan.style.fontSize = `${inputElem}px`;
}
