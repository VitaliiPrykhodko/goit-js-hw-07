const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

 
   const ingredientList =  ingredients.map((ingredient) => {
       const item = document.createElement('li')
       item.textContent = ingredient
       return item
    }) 

const makeIngredientList = document.querySelector('#ingredients')
makeIngredientList.append(...ingredientList)

