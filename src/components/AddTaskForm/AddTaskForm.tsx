import React from 'react';

interface IProps{
  userInput:string,
  onChangeInputText: React.ChangeEventHandler<HTMLInputElement>,
  onClickAddTask:()=>void;
}
const AddTaskForm:React.FC<IProps> = ({
                                        userInput,
                                        onChangeInputText,
                                        onClickAddTask}) => {
  const addTaskForm =(event:React.FormEvent) =>{
    event.preventDefault();
    onClickAddTask();
  }
  return (
    <form id="form" className='mb-3'>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label"></label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={userInput} onChange={onChangeInputText}/>
          <div id="emailHelp" className="form-text">Please add your task</div>
      </div>
      <button type="submit" className="btn btn-primary" onClick={(event)=>{addTaskForm(event)}}>Submit</button>
    </form>
  );
};

export default AddTaskForm;