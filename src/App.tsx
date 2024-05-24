
import './App.css'
import React from 'react';
import AddTaskForm from './components/AddTaskForm/AddTaskForm.tsx';
import Task from './components/Task/Task.tsx';
import {ITask} from './types.ts';

function App() {
  const[userInput, setUserInput]:string = React.useState("")
  const [tasks, setTasks] = React.useState<ITask[]>([
    {title: "buy milk", complete: false, id:"1"},
    {title: "walk with dog", complete: false, id:"2"},
    {title: "do homework", complete: false, id: "3"}
  ])
  return (
    <>
      <AddTaskForm userInput={userInput} setUserInput={setUserInput}/>
      {tasks.map((task, id)=>(
        <Task key={id} title = {task.title} complete={task.complete} id={task.id}/>
      ))}
    </>
  )
}

export default App
