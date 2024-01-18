import React from 'react';

const Pagination = ({ rowsPerPage, totalRows, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center' }}>
        {pageNumbers.map((number) => (
          <li key={number} style={{ margin: '0 10px', cursor: 'pointer' }}>
            <a onClick={() => paginate(number)}>{number}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
