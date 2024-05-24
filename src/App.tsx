import './App.css';
import React, {ChangeEvent} from 'react';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import Task from './components/Task/Task';

function App() {
  const[userInput, setUserInput] = React.useState("");
  const[tasks, setTasks] = React.useState([
    {title: "buy milk", complete: false, id:"1"},
    {title: "walk with dog", complete: false, id:"2"},
    {title: "do homework", complete: false, id: "3"}
  ])

  const onChangeInputText = (event:ChangeEvent<HTMLInputElement>)=>{
    setUserInput(event.target.value);
  }

  const onClickAddTask = ()=>{
    let id = Math.random().toString();
    setTasks((prevState)=>{
      return [...prevState, {title: userInput, complete: false, id: id}];
    })
  }

  const removeTask = (id:string)=>{
    setTasks((prevState)=>{
      return prevState.filter(task => task.id !==id);
    })
  }
  return (
    <>
      <div className="wrapper border border-5 p-3" style={{maxWidth:"700px"}}>
        <AddTaskForm
          userInput={userInput}
          onChangeInputText={(event)=>onChangeInputText(event)}
          onClickAddTask={onClickAddTask}/>
        <div className='d-flex flex-column gap-3'>
          {tasks.map(task=>(
            <Task
              key={task.id}
              title = {task.title}
              complete={task.complete}
              id={task.id}
              removeTask={()=>{removeTask(task.id)}}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
