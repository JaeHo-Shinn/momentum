const todoform = document.querySelector(".todo-form");
const todoformInput = document.querySelector(".todo-form input");
const todolist = document.querySelector(".todo-list");

const TODO_KEY = "todo";
let todoArray = [];
console.log(todoArray);

function saveTodo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(todoArray)); //22번에서 받은 todoArrat값을 로컬스토리지 todo에 문자열로 저장
}

function chenkdone(event) {
  //console.dir(event.target.parentElement.innerText);
  const deletlist = event.target.parentElement;

  deletlist.remove();

  console.log(deletlist.id);

  todoArray = todoArray.filter((todo) => todo.id !== parseInt(deletlist.id));
  saveTodo(todoArray);
}

function makelist(newtodo) {
  const list = document.createElement("li");
  const listspan = document.createElement("span");
  const checkbutton = document.createElement("button");

  listspan.innerText = newtodo.text;
  list.id = newtodo.id;
  checkbutton.innerText = "X";

  todolist.appendChild(list);
  list.appendChild(listspan);
  list.appendChild(checkbutton);

  checkbutton.addEventListener("click", chenkdone);

  console.log(list);
}

function todoformfunc(event) {
  event.preventDefault();

  const whattodo = todoformInput.value;
  todoformInput.value = "";
  //todoformInput.value 값이 순서에따라 whattodo 변수에 대입되고, 다음줄에 따라 값을 비워준다.
  //어쩐지 두번째줄을 whattodo = "";로 하면 작동이 안되더라 아래 작동해서 비교해봐
  //
  //console.log(todoformInput.value); //비교
  //console.log(whattodo);

  const newTodoObj = {
    text: whattodo,
    id: Date.now(),
  };

  todoArray.push(newTodoObj);
  makelist(newTodoObj);
  saveTodo();
}

todoform.addEventListener("submit", todoformfunc);

const savedTodo = localStorage.getItem(TODO_KEY);

if (savedTodo !== null) {
  const parsedTodo = JSON.parse(savedTodo); //json에 있는 값을 js 값으로 가져올때 JSON.parse();
  todoArray = parsedTodo;
  parsedTodo.forEach(makelist);
}
