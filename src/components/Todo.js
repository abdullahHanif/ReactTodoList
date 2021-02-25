import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import { toggleComplete, deleteTodo, editTodo } from '../store/todoAppSlice';


function Todo() {
    const dispatch = useDispatch();
    
    const todoList = useSelector((state) => {
        return state.todoReducer.todos
    })
    
    let [edit, setEdit] = useState("")
    const [value, setValue] = useState("");
    const inputRef = useRef(null)

    const submitUpdate = event => {
        event.preventDefault()
        edit.title = value
        dispatch(editTodo(edit))
        setEdit("")
    }

    if (edit !== "") {
        return (<form onSubmit={submitUpdate} className='todo-form edit' >
            <input
                placeholder='Update todo'
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                name='text'
                className='todo-input'
                ref={inputRef}
            />
            <button className='todo-button edit'
                onClick={submitUpdate} >Update</button>
        </form >);
    }


    return todoList.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}>
            <div key={todo.id} onClick={() => {
                dispatch(toggleComplete(todo))
            }}>
                {todo.title}
            </div>
            <div className='icons'>
                <RiCloseCircleLine
                    onClick={() => {
                        dispatch(deleteTodo(todo.id))
                    }} />
                <TiEdit onClick={() => {
                    setEdit(todo)
                    setValue(todo.title)
                }} />
            </div>
        </div>
    ))
}

export default Todo
