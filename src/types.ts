import React from 'react';

export interface ITask{
  title: string;
  complete: boolean;
  id: string;
  removeTask:React.MouseEventHandler}