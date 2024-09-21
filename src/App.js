import React, { useState } from 'react';
import AddServiceForm from './Components/AddServiceForm';
import ServiceList from './Components/ServiceList';
import './App.css';

function App() {
  const [services, setServices] = useState([]);

  const addService = (service) => {
    setServices([...services, service]);
  };

  const updateService = (updatedService) => {
    setServices(
      services.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
  };

  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };
  
  return (
    <div className="App">
     <AddServiceForm addService={addService}/>
      <ServiceList 
        services={services} 
        updateService={updateService} 
        deleteService={deleteService}
      />
    </div>
  );
}

export default App;
