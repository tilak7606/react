import React ,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { removeTodo } from '../features/Todo/TodoSlice'



export default function Todo() {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);


  return (
    <>
   <div class="bg-blue-500 text-white font-bold p-4 rounded-md shadow-lg w-20 flex justify-between items-center">
        Todos
    </div>

    <ul>
    {todos.map((todo) => (
        <li key={todo.id}
        className='flex justify-between items-center text-lg font-semibold text-gray-800 mb-2 bg-gray-200 hover:bg-blue-100 p-2 rounded'>
          <span> {todo.text  } </span>
            <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className='mx-2 bg-orange-500 rounded-xl p-2'
            >
                delete
            </button>
        </li>
        
    ))}

</ul>
      
    </>
  )
}
