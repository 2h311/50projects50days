$(document).ready(function(){
  let todoList= $("ul.todo-list")[0];
  let formInput = $(".form-input")[0];
  let localTodos = JSON.parse(localStorage.getItem("todos"));

  // check if there's existing todos in we have existing todos in the localstorage
  // add them to do UI if any
  if (localTodos){
    localTodos.forEach(todoElement => addTodoToUI(todoElement));
  } 

  $("#todo-form").on('submit', function(event){
    event.preventDefault();
    
    // get the text the user input 
    formInputValue = formInput.value;
    // set the input value back to empty
    if (formInputValue !== '') {
      addTodoToUI({
        "text": formInputValue,
        "completed": false,
      });
      formInput.value = '';
    }
  });
  
  function updateTodoInUIToSessionStorage(){
    let todos = Array();

    todoList.childNodes.forEach((todo) =>{
      console.log(todo);
      todos.push({
        "text": todo.innerText,
        "completed": todo.classList.contains('completed'),
      });
    });
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  function addTodoToUI(todoElement){
    // create a list item to add the todo-item into  
    let todoItem = $("<li></li>");
    todoItem.addClass("todo-item");
   
    if (todoElement.completed) todoItem.addClass("completed");
    todoItem.text(todoElement.text); 
    todoList.append(todoItem[0]);

    // click - completed
    todoItem.on('click', function(event){
      flag = 'completed';
      // add or remove the completed css class as needed
      todoItem[0].classList.contains(flag) ? todoItem.removeClass(flag) : todoItem.addClass(flag);
      updateTodoInUIToSessionStorage();
    });
  
    // contextmenu - right click
    todoItem.on('contextmenu', function(event){
      event.preventDefault();  
      todoItem.remove()
      updateTodoInUIToSessionStorage();
    });
  
    // update local storage after adding a new todo
    updateTodoInUIToSessionStorage();
  }
});  






