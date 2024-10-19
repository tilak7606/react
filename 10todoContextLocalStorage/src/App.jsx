import React, { useEffect, useState } from 'react'
import './app.css'
import { TodoProvider } from './todoContexts/todoContexts';
import TodoForm from './Components/TodosForm';
import TodoItem from './Components/todosItem';
export default function App() {
  const [todos,setTodos] = useState([]);


const addTodo = (todo) => {
  setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
}


const updateTodo = (id,todo) => {
  setTodos((prev) => prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo )));
}

const deleteTodo = (id) => {
  setTodos((prev) => prev.filter((todo) => todo.id !== id) )
}


const toggleCompleted = (id) => {
  setTodos((prev) => prev.map((prevtodo) => prevtodo.id === id ? 
            {...prevtodo,completed : !prevtodo.completed} :prevtodo ))
}


useEffect(() => {
  const todos = JSON.parse(localStorage.getItem("todos"))
  // setTodos(todos);
  if(todos && todos.length > 0){
    setTodos(todos);
  } 
},[]) 



useEffect(() => {
   localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos]);


  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleCompleted}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
              {/* Todo form goes here */} 
              <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) =>(
             
                <div key={todo.id} className='w-full'>
                  <TodoItem todo={todo} />

                </div>
            ) )
            }
              {/*Loop and Add TodoItem here */}
          </div>
      </div>
    </div>
    </TodoProvider>

  )
}
