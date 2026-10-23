import { useState } from "react"

export function ToDoListComponent(){
    const [todolist,setTodolist] = useState(["To Do List"]);

    function AddToDo()
    {
        const ToDo = document.getElementById("todo-input").value;
        document.getElementById("todo-input").value = "";
        setTodolist(t => [...t,ToDo])

    }

    function removeToDo(index)
    {
        setTodolist(todolist.filter((_, i) => i !== index));
    }
    return(
        <>
        <h1>To Do List!</h1>
        <ul className="list-disc list-inside m-2">
            {todolist.map((todo, index) => (
            <li key={index} onClick={() => removeToDo(index)}>
                {todo}</li>
            ))}
        </ul>
        <input type="text" id="todo-input" placeholder="Enter To Do "/>
        <button onClick={AddToDo}> Add Food</button>
        </>
        
    )
}