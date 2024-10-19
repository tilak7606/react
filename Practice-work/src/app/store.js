import {configureStore} from '@reduxjs/toolkit'
// import Todo from '../components/Todo';
import todoReducer from '../features/Todo/TodoSlice'




export const store = configureStore({
    reducer: todoReducer

});