import { useState } from "react";
import { dummyTodos } from "./data/todos"
import AddTodoItem from "./components/AddTodo";
import TodoListDisplay from "./components/TodoListDisplay";
import CompletedTodoComponent from "./components/CompletedTodo";

function App() {
  const [todos, setTodos] = useState(dummyTodos);
  function setTodoCompletedState(id : number, completed : boolean) {
    setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? {...todo, completed : completed} : todo)); 
  } 

  function addTodoItem(title: string) { 
    setTodos((prevTodos) => {
      const newTodos = [{id: prevTodos.length + 1, title, completed: false}, ...prevTodos ];
      return newTodos.map((todo , index) => {
        return {...todo, id: index + 1};
      });
    });
  }

  function deleteTodoItem(id: number) {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.filter(todo => todo.id !== id);
      return newTodos.map((todo , index) => {
        return {...todo, id: index + 1};
      });
    });
  }

  function deleteAllCallback(){
    setTodos((prevTodos) => {
      const newTodos = prevTodos.filter(todo => !todo.completed);
      return newTodos.map((todo , index) => {
        return {...todo, id: index + 1};
      });
    });
  }

  return (
    <main className="py-10 h-screen bg-gray-200 space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">Todo List</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
        <div className="space-y-2">
          <AddTodoItem onSubmitCallbackFunction={addTodoItem}/>
        </div>
      </div>
      <TodoListDisplay todos={todos} onTodoSelectedCallback={setTodoCompletedState} onTodoDeletedCallback={deleteTodoItem}/>
      {todos.length > 0 && <CompletedTodoComponent todos={todos} onDeleteAllCompleted={deleteAllCallback}/>}
    </main>)
}

export default App
