const categoryEl = document.querySelectorAll('.item');
console.log(`В списке ${categoryEl.length} категории.`);


const navItemEl = document.querySelectorAll('li.item');
navItemEl.forEach((item => {
    console.log(`Категория: ${item.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${item.lastElementChild.children.length}`);
})
)

