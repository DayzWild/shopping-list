let ul = document.querySelector("ul");
let input = document.querySelector("input");
let button = document.querySelector("button");

button.addEventListener("click", addElement);

function addElement() {

    let value = input.value;
    input.value = "";

    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.appendChild(span);
    li.appendChild(button);

    span.textContent = value;
    button.textContent = "Delete";

    ul.appendChild(li);

    button.addEventListener("click", deleteList);

    function deleteList() {

        li.remove();

    }

    input.focus();
    
}