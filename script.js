const listItems = [...document.getElementsByClassName("list-item")];
const myItemList = document.getElementsByClassName("list")[0];
const inputBox = document.getElementsByClassName("input-box")[0];
const checkbox = document.getElementsByClassName("checkbox")[0];

console.dir(checkbox);

function markedAsComplete(event) {
  event.srcElement.classList.toggle("strikethrough");
  event.srcElement.children[0].toggleAttribute("checked");
}

function addNewItem(event) {
  if (event.which === 13) {
    const newLi = document.createElement("li");
    const newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.classList.add("checkbox");
    newLi.classList.add("list-item");
    newLi.innerHTML = inputBox.value;
    inputBox.value = "";
    newLi.appendChild(newCheckbox);
    newLi.addEventListener("click", markedAsComplete);
    myItemList.appendChild(newLi);
  }
}

inputBox.addEventListener("keydown", addNewItem);
listItems.forEach(item => item.addEventListener("click", markedAsComplete));

// what do you want to interact with ? my input box
// how ?
// what do you want to do as a result?

//Also want to add a sound when a new item is added
//Need the new item to inherit checkbox
//Ability to remove items once done
