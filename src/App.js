

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import RecordForm from './components/RecordForm';
import RecordTable from './components/RecordTable';
import ProfilesPage from './components/ProfilesPage';
import './App.css';

const API_URL = 'https://restcountries.com/v3.1/all';

const App = () => {
  const [records, setRecords] = useState([]);
  const [countries, setCountries] = useState([]);
  const [editingRecordId, setEditingRecordId] = useState(null);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  const handleAddRecord = record => {
    setRecords(prevRecords => [...prevRecords, record]);
  };

  const handleDeleteRecord = id=> {
    setRecords(prevRecords => prevRecords.filter(record => record.id !== id));
  };

  const handleEditRecord = id => {
    // Placeholder for editing record logic
    setEditingRecordId(id);
  };

  const navigateToProfiles = () => {
    // Placeholder for navigating to Profiles page
    console.log('Navigating to Profiles page');
  };

  return (
    <Router>
      <div className="app-container">
        <RecordForm onAddRecord={handleAddRecord} countries={countries} />
        <br/><h1>Records</h1>
        <RecordTable records={records} onDelete={handleDeleteRecord} onEdit={handleEditRecord} navigateToProfiles={navigateToProfiles} />
        <div>
          <Link to="/profiles">Go to Profiles</Link>
        </div>
        <Routes>
          <Route path="/profiles" element={<ProfilesPage records={records} />} /> {/* Use the element prop */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;


