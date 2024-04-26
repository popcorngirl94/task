import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiPhoneFill } from "react-icons/pi";
import { AiFillPicture } from "react-icons/ai";
import './form.css'


const RecordForm = ({ onAddRecord, countries }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    address: {
      city: '',
      district: '',
      province: '',
      country: 'Nepal',
    },
    profilePic: null,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddressChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      address: {
        ...prevState.address,
        [name]: value,
      },
    }));
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file && file.type === 'image/png') {
      setFormData(prevState => ({
        ...prevState,
        profilePic: file,
      }));
    } else {
      alert('Please upload a PNG image.');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddRecord({ ...formData, id: Date.now() });
    setFormData({
      name: '',
      email: '',
      phone: '',
      dob: '',
      address: {
        city: '',
        district: '',
        province: '',
        country: 'Nepal',
      },
      profilePic: null,
    });
  };

  return (
    <div className='wrapper'>
      <h2>Add Record</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="name"placeholder='Name' value={formData.name} onChange={handleChange} required />
          <FaUser className='icon' />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} required />
          <MdEmail className='icon' />
        </div>
        <div className="form-group">
          <input type="tel" name="phone" placeholder='Phone' value={formData.phone} onChange={handleChange} required />
          <PiPhoneFill className='icon'/>
        </div>
        <div className="form-group">
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
        </div>
        <div className="address">
          <input type="text" name="city" value={formData.address.city} onChange={handleAddressChange} placeholder="City" />
          <input type="text" name="district" value={formData.address.district} onChange={handleAddressChange} placeholder="District" />
          <select name="province" value={formData.address.province} onChange={handleAddressChange}>
            <option value="">Select Province</option>
            {[1, 2, 3, 4, 5, 6, 7].map(province => (
              <option key={province} value={province}>Province {province}</option>
            ))}
          </select>
          <select name="country" value={formData.address.country} onChange={handleAddressChange}>
            <option value="">Select Country</option>
            {countries.map(country => (
              <option key={country.name.common} value={country.name.common}>{country.name.common}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <input type="file" accept=".png" onChange={handleFileChange} />
          <AiFillPicture className='icon'/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RecordForm;
