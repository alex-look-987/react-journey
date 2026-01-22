
/* 
useMemo Hooks will create/re-access a memorized value from a function call, re-running the function only when dependencies passed as the 2nd parameter are changed.
The result of calling the Hook is inferred from the return value from the function in the first parameter.
You can be more explicit providing a type argument to the Hook
*/

import { useMemo, useState } from "react";

type Todo = {
    id: number;
    text: string;
    completed: boolean
}

type Tab = "all" | "active" | "completed"

function FilterTodos(todos: Todo[], tab: Tab): Todo[] {
    switch (tab) {
        case "active":
            return todos.filter(todo => !todo.completed)
        case "completed":
            return todos.filter(todo => todo.completed)
        default:
            return todos
        }
}

let todo: Todo[] = [
    { id: 1, text: "Aprender React", completed: true },
    { id: 2, text: "Usar useMemo correctamente", completed: false },
    { id: 3, text: "Optimizar renders", completed: false }
]

export default function TodoApp() {
    const [todos, setTodos] = useState<Todo[]>(todo)
    const [tab, setTab] = useState<Tab>("all")

    const visibleTodos = useMemo(() =>
        {return FilterTodos(todos, tab)}, [todos, tab]
    )

    return (
        <div>
            <h2>Todos</h2>

            <div>
                <button onClick={()=> setTab("all")}>Todos</button>
                <button onClick={()=> setTab("active")}>Activos</button>
                <button onClick={()=> setTab("completed")}>Completados</button>
            </div>

            <ul>
                {visibleTodos.map(todo => (
                    <li key={todo.id}>
                        {todo.text} {todo.completed ? "!": ""}
                    </li>
                ))}
            </ul>
        </div>
    )
}

// The type of visibleTodos is inferred from the return value of filterTodos
// const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab])