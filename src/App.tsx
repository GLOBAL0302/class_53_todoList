import './App.css';
import React, {ChangeEvent} from 'react';
import AddTaskForm from './components/AddTaskForm/AddTaskForm.tsx';
import Task from './components/Task/Task.tsx';
import {ITask} from './types.ts';

function App() {
  const[userInput, setUserInput] = React.useState("")
  const[tasks, setTasks] = React.useState<ITask[]>([
    {title: "buy milk", complete: false, id:"1"},
    {title: "walk with dog", complete: false, id:"2"},
    {title: "do homework", complete: false, id: "3"}
  ])

  const onChangeInputText = (event:ChangeEvent<HTMLInputElement>)=>{
    setUserInput(event.target.value)
  }

  const onClickAddTask = ()=>{
    let id = Math.random().toString()
    setTasks((prevState)=>{
      return [...prevState, {title: userInput, complete: false, id: id}]
    })
  }
  return (
    <>
      <div className="wrapper" style={{maxWidth:"700px"}}>
        <AddTaskForm
          userInput={userInput}
          onChangeInputText={(event)=>onChangeInputText(event)}
          onClickAddTask={onClickAddTask}/>
        <div className='d-flex flex-column gap-3'>
          {tasks.map(task=>(
            <Task key={task.id} title = {task.title} complete={task.complete} id={task.id}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
