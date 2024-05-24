import React from 'react';

interface IProps{
  userInput:string,
  setUserInput: React.MouseEvent
}

const AddTaskForm:React.FC<IProps> = ({userInput, setUserInput}) => {
  return (
    <form id="form">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label"></label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">Please add your task</div>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default AddTaskForm;