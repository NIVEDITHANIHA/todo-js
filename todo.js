//selecting html elements
let todoInput = document.querySelector(".to-in");
let todoBtn = document.querySelector(".to-btn");
let todoList = document.querySelector(".todo-list");

todoBtn.addEventListener("click", addto);
todoList.addEventListener("click", Del);

function addto(e) {
  //creating tododiv list
  const todoDiv = document.createElement("div");
  e.preventDefault();
  todoDiv.classList.add("todo");

  //creating todo list
  const toLi = document.createElement("li");
  toLi.classList.add("todoItems");
  toLi.innerText = todoInput.value;
  todoDiv.appendChild(toLi);

  //trash button
  const trashbtn = document.createElement('button');
  trashbtn.classList.add('trash');

  trashbtn.innerText = "DEL";
  todoDiv.appendChild(trashbtn);
  todoList.appendChild(todoDiv);

  todoInput.value = " ";

}

//delete button 

function Del(e){

const item = e.target;
if(item.classList[0] === 'trash')
{
    const todo = item.parentElement; 
    todo.remove();
}
}

















