const submitBtn = document.querySelector(".submit");
const todoInput = document.querySelector("input");
const allTodosTab = document.querySelector(".allTodos");
const completedTodosTab = document.querySelector(".completedTodos");
const todosContainer = document.querySelector(".todosContainer");

const todos = [];

submitBtn.addEventListener("click", () => renderTodos("add"));
allTodosTab.addEventListener('click', () => renderTodos());
completedTodosTab.addEventListener('click', () => {
    const filteredTodos = todos.filter(todo => todo.completed)
    renderTodos("completed", filteredTodos)
})
document.body.addEventListener('keypress', (e) => e.code === "Enter" ? renderTodos("add") : undefined)

const renderTodos = (action, todoList) => {
    const todoListToHandle = action === "completed" ? todoList : todos
    if (action === "add") {
      addTodo(todoInput.value);
    }
    console.log(todosContainer.innerHTML)
    todosContainer.innerHTML = "";
    console.log(todosContainer.innerHTML)
    todoListToHandle.forEach((todo) => handleTodos(todo));
};

const validations = () => {
  if (!todoInput.value) {
    console.log("no input value, no TODO!");
    return false;
  }
  if (todos.find((todo) => todo.title === todoInput.value)) {
    console.log("cannot enter the same TODO twice");
    return false;
  }
  return true;
};

const addTodo = (value) => {
    const isValid = validations()
    if(isValid){
        const todoObject = { title: value, completed: false, id: Date.now() };
        console.log(todoObject);
        todos.unshift(todoObject);
        todoInput.value = "";
    }
};

const handleTodos = (todo) => {
  const todoWrapper = document.createElement("div");
  const todoTitle = document.createElement(decideWhichTag(todo.completed));
  const btnContainer = document.createElement("div");
  const deleteBtn = document.createElement("button");
  const doneBtn = document.createElement("button");

  todoWrapper.classList.add("todo");
  todoTitle.classList.add("todoTitle");
  deleteBtn.classList.add("button-10");
  doneBtn.classList.add("button-10");

  deleteBtn.innerText = "DELETE";
  doneBtn.innerText = todo.completed ? "UNDONE" : "DONE";
  todoTitle.innerText = todo.title;

  deleteBtn.addEventListener("click", () => handleDeleteTodo(todo.id));
  doneBtn.addEventListener("click", () => handleCompleteTodo(todo.id));

  btnContainer.append(deleteBtn, doneBtn);
  todoWrapper.append(todoTitle, btnContainer);
  todosContainer.append(todoWrapper);

  todoInput.focus();
};

const handleDeleteTodo = (todoId) => {
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
  renderTodos()
  console.log(todos);
};

const handleCompleteTodo = (todoId) => {
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);
  if (todoIndex > -1) {
    todos[todoIndex].completed = !todos[todoIndex].completed;
  }
  renderTodos()
  console.log(todos);
};

const decideWhichTag = (completed) => {
    console.log(completed)
    if(completed){
        return 's'
    } else{
        return'h2'
    }
}

