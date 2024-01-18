import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteData, getData, toggleData } from '../Redux/action';
import { Edit } from './Edit';

export const Row = ({ data, rowId }) => {
  const [hide, setHide] = useState(false);
  const { id, firstName, lastName, email, salary, date } = data;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteData(id)).then(() => dispatch(getData()));
  };

  const toggle = () => {
    dispatch(toggleData(id)).then(() => dispatch(getData()));
  };

  return (
    <tr>
      <td>{rowId + 1}</td>
      <td>{`${firstName} ${lastName}`}</td>
      <td>{email}</td>
      <td>{salary}</td>
      <td>{date}</td>
      <td>
        {hide ? (
          <Edit data={data} setHide={setHide} />
        ) : (
          <>
            <button onClick={() => setHide((prev) => !prev)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
      </td>
    </tr>
  );
};
