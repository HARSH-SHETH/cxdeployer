import { useState } from 'react';

export default function ListForm(props){
  // states
  let [value, setValue] = useState('');

  function handleSubmit(e){
    console.log(e.target);
    e.preventDefault();
  }

  function handleChange(e){
    setValue(e.target.value);
  }

  function add(e){
    if(value === ''){
      alert('Please enter list title');
    }else{
      let duplicate = false;
      props.lists.forEach((l) => {
        if(l.title === value){
          alert('A todo list with name ' + value + ' already exists');
          duplicate = true;
          return;
        }
      });

      if(!duplicate){
        let newTodoLists = props.lists.slice();
        let list = {
          title: value,
          rgba: `${rgba()}`,
        }
        newTodoLists.unshift(list);
        props.setTodoLists(newTodoLists);
      }
      props.display(false);
    }

  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" autoFocus={true} onChange={handleChange} placeholder="Enter list title" />
      <button onClick={add}>Add</button>
    </form>
  )
}

function rgba(){
  let rgbstr = 'rgba('; 
  for(let i = 0; i < 3; i++){
    rgbstr += Math.floor(Math.random() * 255).toString() + ', ';
  }
  
  rgbstr += '0.3)';
  console.log(rgbstr);
  return rgbstr;
}
