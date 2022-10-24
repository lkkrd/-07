const btn = document.getElementById("button");
const root = document.querySelector(":root");

btn.addEventListener("click", function () {
  window.colorNums = getRandomNumber();
  console.log(window.colorNums);
  changeColor();
});

//funkcja losuje tabelę z trzema numerami 0-255
function getRandomNumber() {
  let color = [];
  for (i = 0; i < 3; i++) {
    color[i] = Math.floor(Math.random() * 256);
  }

  return color;
}

//funkcja zmienia kolor
function changeColor() {
  console.log(
    `red: ${window.colorNums[0]} green: ${window.colorNums[1]} blue: ${window.colorNums[2]}`
  );
  root.style.setProperty("--col0", window.colorNums[0]);
  root.style.setProperty("--col1", window.colorNums[1]);
  root.style.setProperty("--col2", window.colorNums[2]);
}
