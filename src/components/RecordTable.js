import React, { useState } from 'react';
import './form.css';

const RecordTable = ({ records, onDelete, onEdit, navigateToProfiles }) => {
  const [currentPage, setCurrentPage] = useState(0); // Start from page 0
  const recordsPerPage = 5;

  const indexOfLastRecord = (currentPage + 1) * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = records.slice(indexOfFirstRecord, indexOfLastRecord);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="record-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map(record => (
            <tr key={record.id}>
              <td>{record.name}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>
                <button onClick={() => onDelete(record.id)}>Delete</button>
                <button onClick={() => onEdit(record.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {records.length > recordsPerPage && (
          <ul>
            {Array.from({ length: Math.ceil(records.length / recordsPerPage) }, (_, index) => (
              <li key={index}>
                <button onClick={() => paginate(index)} className={currentPage === index ? "active" : ""}>{index + 1}</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <button onClick={navigateToProfiles}>Go to Profiles</button>
      </div>
    </div>
  );
};

export default RecordTable;
