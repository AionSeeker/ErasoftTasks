//butting the value on the screen && calculating
let oparationScreen = document.querySelector(".calc-operation");
let expression = "";
function handleClick(value) {
  expression += value;
  oparationScreen.innerText = expression;
}
//handling = button
let result = document.querySelector(".button.l.a");
let screenResult = document.querySelector(".calc-typed");
result.addEventListener("click", () => {
  screenResult.innerText = eval(expression);
});
//deleting the value form the screen
let deleteAllButton = document.querySelector(".button.c");

deleteAllButton.addEventListener("click", () => {
  expression = "";
  oparationScreen.innerText = "";
  screenResult.innerText = "";
});
