import React, { useState } from 'react'
import { NavBar } from './components/NavBar'
import { TodoFrom } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { ITodo } from './interfaces'

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    }
    setTodos((prevState) => {
      return [newTodo, ...prevState]
    })
  }

  const toggleHandler = (id: number) => {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  const removeHandler = (id: number) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== id)
    })
  }

  return (
    <>
      <NavBar />
      <div className="container">
        <TodoFrom onAddTodo={addHandler} />
        <TodoList
          onRemove={removeHandler}
          onToggle={toggleHandler}
          todos={todos}
        />
      </div>
    </>
  )
}

export default App
