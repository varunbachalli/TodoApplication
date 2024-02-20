import { Todo } from "../types/todos";
import TodoItem from "./TodoItem";

interface TodoListDisplayProps {
    todos: Todo[];
    onTodoSelectedCallback: (id: number, completed: boolean) => void;
    onTodoDeletedCallback: (id: number) => void;
}


export default function TodoListDisplay({ todos, onTodoSelectedCallback, onTodoDeletedCallback }: TodoListDisplayProps) {

    const ordererdTotos = todos.sort((a, b) => {
        if (a.completed === b.completed) {
            return a.id - b.id;
        }
        
        return a.completed ? 1 : -1;
    });

    
    return (
        <>
         <div className=" max-w-lg mx-auto bg-slate-100 rounded-md">
            <div className="space-y-2">
                {
                    ordererdTotos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} onTodoSelectedCallback={onTodoSelectedCallback} onTodoDeletedCallback={onTodoDeletedCallback} />
                    ))
                }
            </div>
        </div>
        {todos.length=== 0 && 
        <p className="flex justify-center">
            No Todos to display
        </p>}
        </>
       );
}