const forminput = document.getElementById("input");
const addbtn = document.getElementById("add");
const deletebtn = document.getElementById("delete");
const todolst = document.getElementById("todo");
const showbtn = document.getElementById("show")


var todoList = [];

class Todo
{
  todoval;
  constructor(todoval) 
  {
    this.todoval = todoval;  
  }
}

addbtn.addEventListener("click", function () 
{
  const todo = new Todo(forminput.value);
  todoList.push(todo);
  const todoJson = JSON.stringify(todoList);
  localStorage.setItem("todoList", todoJson);
});

showbtn.addEventListener("click", function () 
{
  showUsers();
});


function showUsers() 
{
  const userStorage = localStorage.getItem("todoList");
  const JSONToUser = JSON.parse(userStorage);
  for (let i = 0; i < JSONToUser.length; i++) 
  {
    const listItem = document.createElement("li");
    // liItem.textContent = JSONToUser[i].name + " ( " + JSONToUser[i].email + " )";
    listItem.textContent = JSONToUser[i].todoval
    todolst.appendChild(listItem);
  }
}

deletebtn.addEventListener("click", function () {
  todoList = todoList.filter((todo) => todo.todoval != forminput.value);
  const usersJson = JSON.stringify(users);
  localStorage.setItem("users", usersJson);
});