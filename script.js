const listItems = [...document.getElementsByClassName("list-item")];
const firstItem = listItems[0];

function strike(event) {
  firstItem.classList.toggle("strikethrough");
}
// strike through the text

firstItem.addEventListener("click", strike);
// what do you want to interact with ?
// how ?
// what do you want to do as a result?
