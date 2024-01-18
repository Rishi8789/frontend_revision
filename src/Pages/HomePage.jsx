import React from 'react'
import { EmployeeInput } from '../Components/TodoInput'
import { Row } from '../Components/Row'
import { Nav } from '../Components/Nav'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/action'
import { useState } from 'react'
import Pagination from '../Components/Pagination'

export const HomePage = () => {
    const dispatch = useDispatch();
    const { isLoading, isError, emps } = useSelector((store) => store.reducer);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(5);
  
    useEffect(() => {
      dispatch(getData());
    }, []);
  
    // Get current rows
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = emps?.reverse().slice(indexOfFirstRow, indexOfLastRow);
  
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    return (
      <div className="container">
        <h3>Home-Page</h3>
        <h1>CRUD APPLICATION</h1>
        <EmployeeInput />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((el, id) => (
              <Row data={el} key={el.id} rowId={id} />
            ))}
          </tbody>
        </table>
        <Pagination
          rowsPerPage={rowsPerPage}
          totalRows={emps?.length}
          paginate={paginate}
        />
      </div>
    );
  };
