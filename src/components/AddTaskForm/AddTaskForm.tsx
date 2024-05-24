import React from 'react';

interface IProps {
  userInput: string,
  onChangeInputText: React.ChangeEventHandler<HTMLInputElement>,
  onClickAddTask: () => void;
}

const AddTaskForm: React.FC<IProps> = ({
                                         userInput,
                                         onChangeInputText,
                                         onClickAddTask
                                       }) => {
  const addTaskForm = (event: React.FormEvent) => {
    event.preventDefault();
    if (userInput) onClickAddTask();
    else {
      alert('Please input you task');
    }
  };
  return (
    <form id="form" className="mb-3 d-flex align-items-center">
      <div className="mb-3  w-75">
        <label htmlFor="exampleInputEmail1" className="form-label"></label>
        <input required type="text" className="form-control" id="exampleInputEmail1"
               aria-describedby="emailHelp" value={userInput} onChange={onChangeInputText}/>
        <div id="emailHelp" className="form-text"></div>
      </div>
      <button type="submit" className="btn btn-primary ms-auto" onClick={(event) => {
        addTaskForm(event);
      }}>Submit
      </button>
    </form>
  );
};

export default AddTaskForm;