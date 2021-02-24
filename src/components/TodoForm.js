import { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoAppSlice';

function TodoForm() {
    const [value, setValue] = useState("");
    const inputRef = useRef(null)
    const dispatch = useDispatch();

    useEffect(() => { 
        inputRef.current.focus()
    })

    const handleSubmit = event => {
        event.preventDefault();

        dispatch(addTodo(value));

        setValue("");
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit.bind(this)} target="#">
            <input
                name='text'
                className="todo-input"
                type="text" placeholder="Add a Todo"
                value={value}
                ref = {inputRef}
                onChange={(e) => {
                    setValue(e.target.value);
                }} />

            <button className="todo-button" type='submit'>Add</button>
        </form >
    )
}

export default TodoForm;
