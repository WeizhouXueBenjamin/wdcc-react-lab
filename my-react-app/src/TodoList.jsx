import { useState } from "react"
import styles from "./TodoList.module.css"

const initialTodos = [

    {
        id: 1,
        description: "Wake up",
        isComplete: true,
    },
    {
        id: 2,
        description: "deliver session 1",
        isComplete: false,
    }
]


export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos);
    function handleTodoClick(todo) {
        todo.isComplete = !todo.isComplete;
        const newTodos = [...todos];
        setTodos(newTodos);
    }
    return (
        <div>
            <h2>My Todos</h2>
            {todos.map((todo) => (
                <p key={todo.id} onClick={() => handleTodoClick(todo)} className={todo.isComplete ? styles.completed : styles.incomplete}>
                {todo.description}
                {todo.isComplete ? <span> (complete)</span> : <span> (incomplete)</span>}
                </p>
            ))}
        </div>
    )
}