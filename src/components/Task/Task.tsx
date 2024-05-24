import React from 'react';
import {ITask} from '../../types.ts';


const Task:React.FC<ITask> = ({title, complete, id  }) => {
  return (
    <div className='border border-5 d-flex  align-items-center p-3' style={{height:"80px"}}>
      <h3>{title}</h3>
      <img className="ms-auto" src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/trash-512.png" alt="trashimg" style={{height:"50px"}}/>
    </div>
  );
};

export default Task;