import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getData, updateData } from '../Redux/action';

export const Edit = ({ data, setHide }) => {
  const [editedData, setEditedData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    salary: '',
    date: '',
  });

  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...data,
      firstName: editedData.firstName,
      lastName: editedData.lastName,
      email: editedData.email,
      salary: editedData.salary,
      date: editedData.date,
    };
    dispatch(updateData(data.id, payload)).then(() => dispatch(getData())).then(() => setHide((prev) => !prev));
  };

  useEffect(() => {
    setEditedData({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      salary: data.salary,
      date: data.date,
    });
    inputRef.current.focus();
  }, [data]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            ref={inputRef}
            type="text"
            onChange={(e) => setEditedData({ ...editedData, firstName: e.target.value })}
            value={editedData.firstName}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            onChange={(e) => setEditedData({ ...editedData, lastName: e.target.value })}
            value={editedData.lastName}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            onChange={(e) => setEditedData({ ...editedData, email: e.target.value })}
            value={editedData.email}
          />
        </label>
        <label>
          Salary:
          <input
            type="text"
            onChange={(e) => setEditedData({ ...editedData, salary: e.target.value })}
            value={editedData.salary}
          />
        </label>
        <label>
          Date:
          <input
            type="text"
            onChange={(e) => setEditedData({ ...editedData, date: e.target.value })}
            value={editedData.date}
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};
