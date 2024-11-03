import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Redux To-Do App</h1>
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default App
