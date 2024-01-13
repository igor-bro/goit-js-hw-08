function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElement = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxDiv = document.querySelector("#boxes");

function destroyBoxes() {
  boxDiv.innerHTML = "";
  console.log("destroyBoxes event!");
}

function createBoxes(amount) {
  destroyBoxes();

  let startSize = 30; // 30 px
  const step = 10; // 10px
  const divArray = [];

  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.width = `${startSize}px`;
    newDiv.style.height = `${startSize}px`;
    newDiv.style.backgroundColor = getRandomHexColor();

    divArray.push(newDiv);
    startSize += step;
  }

  boxDiv.append(...divArray);
  console.log("createBoxes event!", amount);
}

btnCreate.addEventListener("click", () => {
  const amountBoxes = Number(inputElement.value);

  if (amountBoxes >= 1 && amountBoxes <= 100) {
    inputElement.value = "";
    createBoxes(amountBoxes);
  }
});

btnDestroy.addEventListener("click", destroyBoxes);
