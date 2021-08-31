import { useState } from 'react';

export default function TodoList(props){
  let [todos, setTodos] = useState([]);
  let [value, setValue] = useState('');
  const style = {
    background: props.list.rgba,
  } 

  function handleSubmit(e){
    e.preventDefault();
    let todo = {
      task: value,
    }
    let newTodos = todos.slice();
    newTodos.push(todo);
    setTodos(newTodos);
    setValue('');
  }

  function deleteTodo(e, key){
    let newTodos = todos.filter((todo, index) => {
      return key !== index;
    })
    setTodos(newTodos);
  }
  return (
    <div style={style}>
      <p>{props.list.title}</p>
      <button onClick={(e) => props.deleteList(e, props.index)}>delete list</button>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={value}
          autoFocus={true} 
          onChange={(e) => setValue(e.target.value)}
          required
          placeholder="Todo:"
        />
        <button type="submit">add</button>
      </form>
      <ul>
      {
        todos.map((todo, key) => {
          return (
            <li key={key}>
            <div>
              <input type="checkbox" />
              <p style={{display: 'inline'}}>{todo.task}</p>
            </div>
            <button onClick={(e) => deleteTodo(e, key)}>
            delete
            </button>
            </li>
          )
        })
      }
      </ul>
    </div>
  )
}
