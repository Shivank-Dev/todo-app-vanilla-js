
const performTodoCreateOperation = (event) => {
    if (event.key === "Enter") {
        createTodo();
    }
}

const createTodo = () => {
    const todoInput = document.getElementById("todo-input").value;

    if (!todoInput) {
        alert(`Task cannot be empty!`);
        return;
    }

    const tasksList = document.getElementById("tasksList");

    const taskSectionDiv = document.createElement("div");
    taskSectionDiv.className = "task-section mt-5 mb-2 bg-gray-100 pl-2 flex";
    const id = new Date().getUTCMilliseconds();
    taskSectionDiv.id = id;

    const taskDiv = document.createElement("div");
    taskDiv.className = "task-title flex-1 flex items-center"

    const task = document.createElement('p');
    
    task.innerHTML= todoInput;
    taskDiv.appendChild(task);


    const deleteBtnDiv = document.createElement('div');
    deleteBtnDiv.className = "delete-btn";

    const deleteBtn = document.createElement('button');
    deleteBtn.className = "bg-red-500 text-white font-bold text-lg py-1 px-4"
    deleteBtn.textContent = "-"

    deleteBtn.onclick = function(){ deleteTodo(id)}

    deleteBtnDiv.appendChild(deleteBtn);


    taskSectionDiv.appendChild(taskDiv)
    taskSectionDiv.appendChild(deleteBtnDiv)
    tasksList.appendChild(taskSectionDiv);

    document.getElementById('todo-input').value = ''
    alert('Task Created Successfully!');
}

const deleteTodo = (id) =>  {
    document.getElementById(id).remove();
    alert('Task Deleted Successfully!');
}