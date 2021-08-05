const getCategoryTotal = document.querySelector('#categories');

console.log(`"В списке ${getCategoryTotal.childElementCount} категории."`);

const getElItem = document.querySelectorAll('.item')

const elItem = getElItem.forEach((elem) => {
    console.log(`Категория: ${elem.firstElementChild.textContent}`);

    console.log(`Количество элементов: ${elem.lastElementChild.childElementCount}`)
})