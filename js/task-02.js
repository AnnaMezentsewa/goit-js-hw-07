const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const navEl = document.querySelector('#ingredients');
const ingredienEl = ingredients.map(ingredients => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredients;
    return itemEl;
});
navEl.append(...ingredienEl);