import { useSelector, useDispatch } from 'react-redux'
import { toggleTodo, deleteTodo } from '../features/todos/todoSlice'

const TodoList = () => {
  const todos = useSelector((state) => state.todos.items)
  const dispatch = useDispatch()

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`flex justify-between items-center p-2 border ${
            todo.completed ? 'line-through text-gray-500' : ''
          }`}
        >
          <span onClick={() => dispatch(toggleTodo(todo.id))}>{todo.text}</span>
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="text-red-500"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
