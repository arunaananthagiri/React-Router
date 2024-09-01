// src/components/Place.js
import React from 'react';
import './Place.css';

const Place = ({ name, description, image }) => {
  return (
    <div className="place">
      <div className="description">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="image">
        <img src={image} alt={name} />
      </div>
    </div>
  );
};

export default Place;
