let form = document.getElementById("todo-form");
let formInput = document.querySelector(".form-input");
let todoList = document.querySelector("ul.todo-list");

let localTodos = JSON.parse(localStorage.getItem("todos"));
console.log(localTodos);

if (localTodos){
  // add todos to UI
}


function addTodoToUI(todo){
  
}