
const refs = {
    onElInput: document.querySelector('[type="number"]'),
    btnRender: document.querySelector('[data-action="render"]'),
    btnDestroy: document.querySelector('[data-action="destroy"]'),
    onElDiv: document.querySelector('#boxes'),
}

refs.btnRender.addEventListener('click', createBoxes)
refs.btnDestroy.addEventListener('click', destroyBoxes)

function createBoxes(amount) {
    amount = refs.onElInput.value;
    for (let i = 0; i < amount; i++) {
        const divBox = document.createElement('div');
        
        divBox.className += 'box';
        divBox.style.width = '30px';
        divBox.style.height = '30px';
        divBox.style.backgroundColor = 'red';
        divBox.style.marginBottom = '10px'

        refs.onElDiv.append(divBox);
    }
}



function destroyBoxes() {
    const childDiv = document.querySelectorAll('.box');
    childDiv.forEach((elem) => {
        elem.remove();
    }) 
    
}

