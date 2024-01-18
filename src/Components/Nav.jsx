import React from 'react';
import { useSelector } from 'react-redux';

export const Nav = () => {
  const { todos } = useSelector((store) => store.reducer);

  const completed = todos?.filter((todo) => todo.status === true);
  console.log(todos, "todos");
  console.log(completed, completed.length);

  const notCompleted = todos?.filter((todo) => todo.status !== true);
  console.log(notCompleted, notCompleted.length);

  return (
    <div className='flex'>
      <button>Total :-{todos?.length}</button>
      <button>Completed :-{completed?.length}</button>
      <button>Not Completed :-{notCompleted?.length}</button>
    </div>
  );
};