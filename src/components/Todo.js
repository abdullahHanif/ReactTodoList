import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import { toggleComplete, deleteTodo, editTodo } from '../store/todoAppSlice';
import TodoForm from './TodoForm';
import Todoo from "../models/todo";

function Todo() {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => {
        return state.todoReducer.todos
    })

    const [edit, setEdit] = useState(new Todoo(null, "", false))

    const submitUpdate = event => {
        event.preventDefault()
        dispatch(editTodo(edit))
        setEdit = null
    }



    if (edit.id) {
        return <TodoForm edit={edit} onSumbit={ submitUpdate.bind(this)  } target="#" />
    }


    return todoList.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}>
            <div key={todo.id} onClick={() => {
                console.log("marking complete : " + todo.id)
                dispatch(toggleComplete(todo.id))
            }}>
                {todo.title}
            </div>
            <div className='icons'>
                <RiCloseCircleLine
                    onClick={() => {
                        console.log("deleting todo : " + todo.id)
                        dispatch(deleteTodo(todo.id))
                    }} />
                <TiEdit onClick={() => {
                    setEdit(new Todoo(todo.id, todo.title, todo.isComplete))
                }} />
            </div>
        </div>
    ))

}

export default Todo
