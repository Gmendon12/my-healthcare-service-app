// src/components/AddServiceForm.js
import React, { useState } from 'react';

const AddServiceForm = ({ addService }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !price) {
      alert('All fields are required!');
      return;
    }

    const newService = {
      id: Date.now(),
      name,
      description,
      price,
    };

    addService(newService);

    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <div className='add-service-container'>
      <h2>Add New Service</h2>
      <form onSubmit={handleSubmit} className='add-service-form'>
        <div className='form-input'>
        <label for="serviceName">Service Name</label>
        <input
          type="text"
          placeholder="Enter Service Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="serviceName"
          className='input-styling'
        />
        </div>
         
         <div className='form-input'>
         <label for="serviceDescription">Service Description</label>
        <input
          type="text"
          placeholder="Enter Service Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id='serviceDescription'
          className='input-styling'
        />
         </div>
       
       <div className='form-input'>
       <label for="price">Price</label>
       <input
          type="number"
          placeholder="Enter Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          id='price'
          className='input-styling'
        />
       </div>
      
        <button className='btn' type="submit">Add Service</button>
      </form>
    </div>
  ); 
};

export default AddServiceForm;
