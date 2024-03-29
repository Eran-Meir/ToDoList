import React, {useState} from "react";

function ToDoList() {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState(["Brush Teeth", "Do Homework"]);


    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const inputElement = event.target as HTMLInputElement;
        setNewTask(inputElement.value);
    }

    function addTask(event: React.MouseEvent<HTMLButtonElement>) {
        if (newTask != null && newTask !== "" && !tasks.includes(newTask)) {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        } else {
            const targetObject = event.target as HTMLButtonElement;
            alert("Error: Unable to add task. Please check your input and ensure your task is defined and not already on the list.");
            targetObject.style.backgroundColor = 'hsl(10, 70%, 60%)';
            setTimeout(() => {
                targetObject.style.backgroundColor = 'hsl(125, 70%, 60%)'; // Change back to original color (or any other desired color)
            }, 500);
        }
    }


    function deleteTask(index: number) {
        const updatedTasks = tasks.filter((task, i) => i !== index);
        setTasks(updatedTasks);
    }


    function moveTaskUp(index: number, button: HTMLButtonElement) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setActiveColor(index - 1);
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index: number, button: HTMLButtonElement) {
        if (index >= 0 && index + 1 < tasks.length) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setActiveColor(index + 1);
            setTasks(updatedTasks);
        }
    }

    function setActiveColor(index: number) {
        const li = document.querySelector(`ol li:nth-child(${index + 1})`) as HTMLLIElement;
        if (li !== null) {
            li.style.backgroundColor = 'hsl(125, 70%, 40%)';
            setTimeout(() => {
                li.style.backgroundColor = 'hsl(0, 0%, 97%)'; // Change back to original color (or any other desired color)
            }, 500); // Delay of 3 seconds
        }
    }

    return (
        <div className="to-do-list">
            <h1>To Do List</h1>
            <div>
                <input type="text" placeholder="Enter a new task" value={newTask} onChange={handleInputChange}/>
                <button className="add-button" onClick={addTask}>Add Task</button>
                <ol>
                    {tasks.map((task, index) =>
                        <li key={index}>
                            <span className="tasks-text">{task}</span>
                            <button className="delete-button" onClick={() => deleteTask(index)}>Delete Task</button>
                            <button className="move-up-button"
                                    onClick={
                                        (event: React.MouseEvent<HTMLButtonElement>) =>
                                            moveTaskUp(index, event.target as HTMLButtonElement)}>Move Up
                            </button>
                            <button className="move-down-button" onClick={
                                (event: React.MouseEvent<HTMLButtonElement>) =>
                                    moveTaskDown(index, event.target as HTMLButtonElement)}>Move Down
                            </button>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    )
}

export default ToDoList