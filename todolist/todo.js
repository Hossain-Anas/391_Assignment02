const todoForm = document.querySelector("form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let allTodos = getTodo();
updateTodoList();

todoForm.addEventListener('submit', function(e){
    e.preventDefault(); 
    addTodo();
});

function addTodo(){
    const todoText = todoInput.value.trim();
    if(todoText.length > 0){
        allTodos.push({
            text: todoText,
            checked: false
        });
        updateTodoList();
        saveTodo();
        todoInput.value = "";
    }
}

function updateTodoList(){
    todoList.innerHTML = "";
    allTodos.forEach((todo, i) => {
        todoItem = createTodoItem(todo, i);
        todoList.appendChild(todoItem);
    });
}


function createTodoItem(todo, i){
    const todoId = "todo-" + i;
    const todoLI = document.createElement("li");
    todoLI.className = "todo";
    todoLI.innerHTML = `<input type="checkbox" id="${todoId}" ${todo.checked ? 'checked' : ''}>
                <label class="custom-checkbox" for="${todoId}">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                </label>

                <label for="${todoId}" class="todo-text">
                    ${todo.text}
                </label>

                <button class="delete-button">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                </button>
    `
    
    const checkbox = todoLI.querySelector(`#${todoId}`);
    checkbox.addEventListener("change", function(){
        allTodos[i].checked = checkbox.checked;
        saveTodo();
    });
    
    const deleteButton = todoLI.querySelector(".delete-button");
    deleteButton.addEventListener("click", function(){
        deleteTodoItem(i);
    })
    return todoLI;
}

function deleteTodoItem(i){
    allTodos = allTodos.filter((_, index) => index !== i);
    saveTodo();
    updateTodoList();
    
}



function saveTodo(){
    const todoJson = JSON.stringify(allTodos);
    localStorage.setItem("todos", todoJson);
}

function getTodo(){
    const todos = localStorage.getItem("todos") || "[]";
    const parsedTodos = JSON.parse(todos);
    
    // Convert old string format to new object format
    if (parsedTodos.length > 0 && typeof parsedTodos[0] === 'string') {
        return parsedTodos.map(todo => ({
            text: todo,
            checked: false
        }));
    }
    
    return parsedTodos;
}

getTodo();


saveTodo();
