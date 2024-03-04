import React, {useState} from "react";

function ToDoList() {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState(["Brush Teeth", "Do Homework"]);


    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask != null && newTask !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask() {

    }

    function moveTaskUp(index) {

    }

    function moveTaskDown(index) {

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
                            <button className="move-up-button" onClick={() => moveTaskUp(index)}>Move Up +</button>
                            <button className="move-down-button" onClick={() => moveTaskDown(index)}>Move Down -
                            </button>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    )
}

export default ToDoList