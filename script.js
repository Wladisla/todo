//choose elements for query-ing
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const todoFilter = document.querySelector('.filter-todo')
//add eventListeners
document.addEventListener('DOMContentLoaded', getTodo);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);
todoFilter.addEventListener('click', filterTodo);

//
/*document.getElementById("todo-button").onclick = function (e) {
    document.getElementById("todo-input").value = "";
}*/
//functions
function addTodo(e) {
    e.preventDefault();
    const div = document.createElement('div')
    div.classList.add("todo");
    const li = document.createElement('li');
    li.innerText = todoInput.value;
    //create complete button
    const buttonCompleted = document.createElement('button');
    buttonCompleted.innerHTML = `<i class="fas fa-star"></i>`
    buttonCompleted.onclick = deleteTodo;
    buttonCompleted.classList.add("star-btn");
    li.appendChild(buttonCompleted)
    //create trash button
    const buttonTrash = document.createElement('button')
    buttonTrash.innerHTML = `<i class="fas fa-trash"></i>`
    buttonTrash.onclick = deleteTodo;
    buttonTrash.classList.add("trash-btn");
    li.appendChild(buttonTrash)
    todoList.appendChild(li)
    saveLocalTodo(todoInput.value);
}

function deleteTodo(e) {
    const item = e.target;
    const todo = item.parentElement;
    if (item.classList[0] === 'trash-btn') {
        todoList.removeChild(todo)
        removeLocalTodo(todo);
    }
    if (item.classList[0] === 'star-btn') {

        todo.classList.add('modern');
    }
}
function filterTodo() {
    //filter in cases
}
function saveLocalTodo(todo) {
    console.log(todo)

    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos));
}
function removeLocalTodo(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    itemLocal = JSON.parse(localStorage.getItem("todos"));
    number = itemLocal.indexOf(todo.innerText)
    todos.splice(number, 1);
    //itemLocal
    console.log(todos)
    localStorage.setItem("todos", JSON.stringify(todos));
}
function getTodo() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    let n = -1;
    todos.forEach(function (todo) {
        n = n + 1;
        const div = document.createElement('div')
        div.classList.add("todo");
        const li = document.createElement('li');
        li.innerText = todos[n];
        //create complete button
        const buttonCompleted = document.createElement('button');
        buttonCompleted.innerHTML = `<i class="fas fa-star"></i>`
        buttonCompleted.onclick = deleteTodo;
        buttonCompleted.classList.add("star-btn");
        li.appendChild(buttonCompleted)
        //create trash button
        const buttonTrash = document.createElement('button')
        buttonTrash.innerHTML = `<i class="fas fa-trash"></i>`
        buttonTrash.onclick = deleteTodo;
        buttonTrash.classList.add("trash-btn");
        li.appendChild(buttonTrash)
        todoList.appendChild(li)
    })
}
//start App