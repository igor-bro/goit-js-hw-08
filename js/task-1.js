// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const list = document.querySelector("#categories");

console.log(`Number of categories: ${list.children.length}`);

const items = document.querySelectorAll(".item");

items.forEach((liItem) => {
  console.log(`Category: ${liItem.children[0].textContent}`);
  console.log(`Elements: ${liItem.children[1].children.length}`);
});
