import React, { useRef, useState } from 'react'

interface TodoFromProps {
  onAddTodo(title: string): void
}

export const TodoFrom: React.FC<TodoFromProps> = (props) => {
  const { onAddTodo } = props
  //   const [title, setTitle] = useState<string>('')
  const input = useRef<HTMLInputElement>(null)

  //   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setTitle(event.target.value)
  //   }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      //   console.log(title)
      //   setTitle('')
      onAddTodo(input.current!.value)
      input.current!.value = ''
    }
  }

  return (
    <div className="input-field">
      <input
        // onChange={changeHandler}
        // value={title}
        type="text"
        id="title"
        ref={input}
        placeholder="Enter todo name"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Enter todo name
      </label>
    </div>
  )
}
