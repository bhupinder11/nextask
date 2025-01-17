import React, {useState} from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")

 const [todos, setTodos] = useState<Todo[]>([])

 const handleAdd = (e: React.FormEvent) => {
     e.preventDefault()

     if(todo){
      setTodos([...todos, {id: Date.now(), todo, isDone: false}])
      setTodo("")
     }
 }

  console.log(todos)

  return (
    <div className="w-full h-screen flex flex-col items-center bg-newblue -m-2  bg-indigo-400">
     <span className="text-center text-white text-3xl z-2 my-6">NexTask</span>
     <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
     {/* {todos.map(t => <li>{t.todo}</li>)}*/}
     <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default App;
