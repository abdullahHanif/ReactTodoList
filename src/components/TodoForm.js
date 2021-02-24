import { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo, editTodo } from '../store/todoAppSlice';

function TodoForm(props) {
    const [value, setValue] = useState(props && props.edit ? props.edit.title : "");
    const inputRef = useRef(null)
    const dispatch = useDispatch();

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleSubmit = e => {
        e.preventDefault();

        if (props && props.edit) {
            props.edit.title = value;
            dispatch(editTodo(props.edit));
        } else {
            dispatch(addTodo(value));
        }

        setValue("")
    }

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            {props.edit ? (
                <>
                    <input
                        placeholder='Update your item'
                        value={value}
                        onChange={
                            (e) => {
                                setValue(e.target.value);
                            }
                        }
                        name='text'
                        ref={inputRef}
                        className='todo-input edit'
                    />
                    <button onClick={handleSubmit} className='todo-button edit'>
                        Update
                  </button>
                </>
            ) : (
                    <>
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
                        <button onClick={handleSubmit} className='todo-button'>
                            Add todo
                  </button>
                    </>
                )}
        </form>
    );

}

export default TodoForm;
