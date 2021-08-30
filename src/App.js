import {useState, useEffect} from 'react';

import ListForm from './ListForm.js';
import List from './List.js';

function App() {
  let [todolists, setTodoLists] = useState([]);
  let [displayForm, setDisplayForm] = useState(false);

  useEffect(() => {
    console.log(todolists);
  }, [todolists]);

  function newTodoList(e){
    setDisplayForm(true);
  }

  if(displayForm){
    return (
      <ListForm remove={setDisplayForm} />
    )
  }else{
    return (
      <div className="App">
      <button onClick={newTodoList}>
      Create New Todo List
      </button> 
      </div>
    );
  }
}

export default App;
