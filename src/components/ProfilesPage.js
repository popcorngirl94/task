
import React from 'react';

const ProfilesPage = ({ records }) => {
  return (
    <div className="profiles-page">
      <h1>Profiles</h1>
      <div className="profiles-list">
        {records.map((record, index) => (
          <div key={index} className="profile-item">
            <h3>{record.name}</h3>
            <p><strong>Email:</strong> {record.email}</p>
            <p><strong>Phone:</strong> {record.phone}</p>
            <p><strong>Address:</strong> {`${record.address.city}, ${record.address.district}, Province ${record.address.province}, ${record.address.country}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilesPage;


