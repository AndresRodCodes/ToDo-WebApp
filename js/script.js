const list = document.getElementById("list");
const btnAddTodo = document.getElementById("btn-Add-Todo");
const userTodo = document.getElementById("input");
const dateElement = document.getElementById("date");
const btnDeleteAll = document.getElementById("delete-all");

const options = {weekday: "long", month : "short", day : "numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

let addToDo = () => {
    let userText = userTodo.value;
    if (userText) {
        list.insertAdjacentHTML("beforeend", `<li class="user-todo" >${userText}</li>`);
        userTodo.value = "";
    }
}

let removeAllToDos = () => {
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

btnAddTodo.addEventListener("click", addToDo);
btnDeleteAll.addEventListener("click", removeAllToDos);
