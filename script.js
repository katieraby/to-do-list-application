const listItems = [...document.getElementsByClassName("list-item")];
// const inputBox = document.getElementByClassName("input-box");

// console.log(inputBox);
// console.dir(inputBox);

// what do you want to interact with ? my input box
// how ?
// what do you want to do as a result?

function completed(event) {
  event.srcElement.classList.toggle("strikethrough");
  event.srcElement.children[0].toggleAttribute("checked");
}

listItems.forEach(item => item.addEventListener("click", completed));
