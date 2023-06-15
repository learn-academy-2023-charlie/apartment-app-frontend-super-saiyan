import React from 'react';

import '../styling/ApartmentDelete.css'

const ApartmentDelete = ({ id }) => {
  // Implement the delete functionality here
  const handleDelete = () => {
    // Delete logic goes here
  };

  return (
    <button className="dltBtn" onClick={handleDelete}>
      <span>Delete</span>
    </button>
  );
};

export default ApartmentDelete;
