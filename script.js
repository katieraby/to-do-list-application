const listItems = [...document.getElementsByClassName("list-item")];
const myItemList = document.getElementsByClassName("list")[0];
const inputBox = document.getElementsByClassName("input-box")[0];

console.dir(inputBox);

function completed(event) {
  event.srcElement.classList.toggle("strikethrough");
  event.srcElement.children[0].toggleAttribute("checked");
}

function addNewItem(event) {
  if (event.which === 13) {
    const newLi = document.createElement("li");
    newLi.classList.add("list-item");
    newLi.innerHTML = inputBox.value;
    myItemList.appendChild(newLi);
  }
}

listItems.forEach(item => item.addEventListener("click", completed));
inputBox.addEventListener("keydown", addNewItem);

// what do you want to interact with ? my input box
// how ?
// what do you want to do as a result?
