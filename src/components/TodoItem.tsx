
interface TodoItemProps {
    todo: Todo;
    onTodoSelectedCallback: (id: number, completed: boolean) => void;
    onTodoDeletedCallback: (id : number)=> void;
}


export default function TodoItem({ todo , onTodoSelectedCallback, onTodoDeletedCallback}: TodoItemProps) {
    return (
        <div className="flex">
            <label className = "grow items-center gap-2 border rounded-s-md p-2 border-gray-400 bg-white hover:bg-slate-300">
                <input type="checkbox"  
                checked={todo.completed} 
                className="scale-125" 
                onChange={(e)=>onTodoSelectedCallback(todo.id, e.target.checked)}
                />
                <span className={todo.completed ? "line-through text-gray-400 p-2" : "p-2"}>
                    {todo.id}. {todo.title} 
                </span>
            </label>
            <button className="w-1/6 
                    bg-slate-900 
                    text-white 
                    font-bold 
                    rounded-e-md 
                    p-2 
                    hover:bg-slate-600"
                    onClick={() => onTodoDeletedCallback(todo.id)}>
                    🗑️
            </button>
        </div>
    );
}