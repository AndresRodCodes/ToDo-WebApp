const list = document.getElementById("list");
const btnAddTodo = document.getElementById("btn-Add-Todo");
const userTodo = document.getElementById("input");

let addToDo = () => {
    let userText = userTodo.value;
    list.insertAdjacentHTML("beforeend", `<li class="user-todo" >${userText}</li>`);
}

btnAddTodo.addEventListener("click", addToDo);

