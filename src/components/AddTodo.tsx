import { useState } from "react";


interface AddTodoFormProps {    
    onSubmitCallbackFunction: (text: string) => void;
}

export default function AddTodoItem({onSubmitCallbackFunction} : AddTodoFormProps) {
    const [input, setInput] = useState("");

    function handleSubmit(e : React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const text = input.trim();
        if(!text) return;
        onSubmitCallbackFunction(text);
        setInput("");
    }
    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input className=" grow 
                               border 
                               rounded-s-md p-2
                              border-slate-900
                              bg-slate-200
                              hover:bg-slate-300"
                placeholder="What do you want to do?"
                value = {input}
                onChange = {(e) => setInput(e.target.value)} />
            <button type="submit"
                    className="w-1/5 
                    bg-slate-900 
                    text-white 
                    font-bold 
                    rounded-e-md 
                    p-2 
                    hover:bg-slate-600">
                    Add
            </button>
        </form>
    )
}