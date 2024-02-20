import { Todo } from "../types/todos";

interface CompletedTodoProps {
    todos: Todo[];
    onDeleteAllCompleted: () => void;
}


export default function CompletedTodoComponent({todos, onDeleteAllCompleted} : CompletedTodoProps){

    const completedTodos = todos.filter(todo => todo.completed);
    return (
        <div className = "text-center space-y-2">
            <p className="text-sm font-medium">
                Completed Todos: {completedTodos.length} / {todos.length}
            </p>
            {
            completedTodos.length > 0  && 
            (<button onClick={onDeleteAllCompleted} className="text-sm font-medium text-red-500 hover:underline">Delete All Completed</button>)
            }
        </div>
    )
}