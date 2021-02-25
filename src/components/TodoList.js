import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
    return (
        <div>
            <h1>What's the plan for Today? </h1>
            <TodoForm />
            <Todo />
        </div>
    )
}

export default TodoList
