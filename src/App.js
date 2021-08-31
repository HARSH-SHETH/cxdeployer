import {useState, useEffect} from 'react';

import ListForm from './ListForm';
import TodoLists from './TodoLists';

import './App.css';

function App() {
  let [todolists, setTodoLists] = useState([]);
  let [displayForm, setDisplayForm] = useState(false);

  useEffect(() => {
    console.log(todolists);
  }, [todolists]);

  function newTodoList(e){
    setDisplayForm(true);
  }

  function deleteTodoList(e, key){
    let newTodoLists = todolists.filter((list, index) => {
      return index !== key;
    })

    setTodoLists(newTodoLists);
  }

  return (
    <div className="App">
    <button onClick={newTodoList}>
    Create New Todo List
    </button> 
    { displayForm && 
      <ListForm 
        display={setDisplayForm} 
        lists={todolists}
        setTodoLists={setTodoLists}
      /> 
    }
    <TodoLists deleteList={deleteTodoList} todolists={todolists}/>
    </div>
  );
}

export default App;
