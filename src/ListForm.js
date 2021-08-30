import { useState } from 'react';

export default function ListForm(props){
  // states
  let [value, setValue] = useState('');

  function handleSubmit(e){
    console.log(e.target);
    e.preventDefault();
  }

  function handleChange(e){
    console.log(e.target.value)
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} placeholder="Enter list title" />
      <button type="submit" name="add" disabled="true">Add</button>
      <button type="submit" name="cancel">cancel</button>
    </form>
  )
}
