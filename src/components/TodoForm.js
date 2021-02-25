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

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addTodo(value));
        setValue("")
    }

    return (
        <form onSubmit={handleSubmit} className='todo-form'>

            <input
                placeholder='Add a todo'
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                name='text'
                className='todo-input'
                ref={inputRef}
            />
            <button className='todo-button'
                onClick={handleSubmit} >Add todo</button>
        </form>
    );

}

export default TodoForm;
