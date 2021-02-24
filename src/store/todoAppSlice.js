import { createSlice } from "@reduxjs/toolkit";
import Todo from "../models/todo";
import { v4 as uuidv4 } from 'uuid';


const todoSlice = createSlice({
    name: "ToDoSlice",
    initialState: {
        todos: []
    },

    reducers: {
        addTodo: (state, action) => {
            if (!action.payload || /^\s*$/.test(action.payload)) {
                return
            }

            
            state.todos.push(new Todo(uuidv4(), action.payload, false))
            console.log(...state.todos)
        },

        deleteTodo: (state, action) => {
            //state.todos.splice(action.payload, action.payload)
            
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
            console.log("deleted"+ action.payload)
        },

        editTodo: (state, action) => {
            state.todos = state.todos.map(todo => ((todo.id === action.payload.id) ? new Todo(action.payload.id, action.payload.title, action.payload.isComplete) : todo))
            console.log(...state.todos)
        },

        toggleComplete: (state, action) => {
            state.todos =  state.todos.map(todo => ((todo.id === action.payload.id) ? new Todo(action.payload.id, action.payload.title, !action.payload.isComplete) : todo))
            console.log(...state.todos)
            // state.todos[action.payload].isComplete = !state.todos[action.payload].isComplete;
            //state.todos[state.todos.indexOf(action.payload)].isComplete =  !state.todos[state.todos.indexOf(action.payload)].isComplete
        }

    }
})

export const { addTodo, deleteTodo, editTodo, toggleComplete } = todoSlice.actions;
export const todoReducer = todoSlice.reducer; 