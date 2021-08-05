const onElInput = document.querySelector('#font-size-control');
const onElSpan = document.querySelector('#text')

onElInput.addEventListener('input', upSizeTextSpan)

function upSizeTextSpan(even) {
    onElSpan.style.fontSize = `${even.currentTarget.value}px`;
}


