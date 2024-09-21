import React, { useState } from 'react';

const ServiceList = ({services, updateService, deleteService}) => {
  
  const [editId, setEditId] = useState(null);
  const [editFormData, setEditFormData] = useState({ name: '', description: '', price: '' });

  const handleEditClick = (service) => {
    setEditId(service.id);
    setEditFormData({ name: service.name, description: service.description, price: service.price });
  };

  const handleSaveClick = (id) => {
    const updatedService = { id, ...editFormData };
    updateService(updatedService);
    setEditId(null); 
  };

  const handleChange = (e) => {
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='healthcare-services'>
      <h2>Healthcare Services</h2>

      {services.length === 0 ? (
        <p>No services available. Please add one.</p>
      ) : ( 
        <div className='cards-flex'>
        {services.map((service) => (
          <div key={service.id} className='service-card'>
            {
              editId === service.id ? (
                <div className='service-card-content'>
                  <div className='service-card-text'>
                  <input
                    type="text"
                    name="name"
                    value={editFormData.name}
                    onChange={handleChange}
                    placeholder="Service Name"
                    className='service-card-name'
                  />
                  <input
                    type="text"
                    name="description"
                    value={editFormData.description}
                    onChange={handleChange}
                    placeholder="Service Description"
                    className='service-card-desc'
                  />
                  <input
                    type="number"
                    name="price"
                    value={editFormData.price}
                    onChange={handleChange}
                    placeholder="Price"
                    className='service-card-price'
                  /> 
                  </div>
             
                  <div className='service-card-btn'>
                  <button className='edit-btn' onClick={() => handleSaveClick(service.id)}>Save</button>
                  <button className='delete-btn' onClick={() => setEditId(null)}>Cancel</button>
                  </div>
                 
                </div>
              ) : (

            <div className='service-card-content'>

            <div className='service-card-text'>
            <div className='service-card-name'>{service.name}</div>
            <div className='service-card-desc'>{service.description}</div>
            <div className='service-card-price'>${service.price}</div>
            </div>

            <div className='service-card-btn'>
            <button className='edit-btn' onClick={() => handleEditClick(service)}>Edit</button>
            <button className='delete-btn' onClick={() => deleteService(service.id)}>Delete</button>
            </div> 

            </div>
              )
            }
            
          </div>
        ))}
      </div>
      )}
  
    </div>
  );
};

export default ServiceList;
