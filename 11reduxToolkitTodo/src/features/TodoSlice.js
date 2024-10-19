import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), // nanoid() gives unique id to any variable :
                text: action.payload           // issa current value aa jaygi jo user ne type ki hogi 
            }
            state.todos.push(todo)    // state mai add ho jayga 
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload ) // issa hma pta chalega kiski id given id se match ho rhi hai
        },

        updateTodText: (state,action) =>{
            const {newId,newText} = action.payload;
            const newTodo = state.todos.find((todo) => todo.id === newId);
            if(newTodo){
                newTodo.text = newText;
            }
        },
       
    },
})

export const {addTodo, removeTodo,updateTodText} = todoSlice.actions

export default todoSlice.reducer