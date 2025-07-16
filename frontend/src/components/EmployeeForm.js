import React, { useState } from 'react';
import axios from 'axios';
import './EmployeeForm.css';

function EmployeeForm() {
  const [formData, setFormData] = useState({ name: '', email: '', position: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('/api/employees', formData);
    setFormData({ name: '', email: '', position: '' });
    alert('Employee added successfully!');
  };

  return (
    <div className="form-container">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input name="position" value={formData.position} onChange={handleChange} placeholder="Position" required />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default EmployeeForm;

