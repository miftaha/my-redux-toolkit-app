import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todos/todoSlice'

const TodoInput = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text))
      setText('')
    }
  }

  return (
    <div className="flex space-x-2 mb-4">
      <input
        type="text"
        className="border p-2 flex-1"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new to-do"
      />
      <button
        onClick={handleAddTodo}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </div>
  )
}

export default TodoInput
