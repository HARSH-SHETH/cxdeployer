import TodoList from './TodoList';

export default function TodoLists(props){


  const listItems = props.todolists.map((list, index) => {
    return <TodoList deleteList={props.deleteList} key={index} index={index} list={list}/>
  })

  return(
    <div className="lists">
    {listItems}
    </div>
  )
}
