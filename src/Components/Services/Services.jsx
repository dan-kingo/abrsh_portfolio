import React from "react";
import "./Services.css";
import services from "../../assets/services_data";

const Services = () => {
  return (
    <div className="service-section" id="service">
      <div className="service-heading">
        <h1>My Services</h1>
      </div>
      <div className="service-container">
        {services.map((service, index) => {
          return (
            <div key={index} className="service-box">
              <h3>{service.id}</h3>
              <h2>{service.name}</h2>
              <p>{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
