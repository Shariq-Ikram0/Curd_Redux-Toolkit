import React from 'react';

const Card = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-80">
        <h5 className="text-4xl text-center font-semibold text- mb-4">Read Data</h5>
        <p className="text-gray-700 mb-1"><span className="font-medium">Name:</span> </p>
    
        <p className="text-gray-700 mb-1"><span className="font-medium">Email:</span> </p>
        <p className="text-gray-700 mb-1"><span className="font-medium">Age:</span> </p>
        <p className="text-gray-700"><span className="font-medium">Gender:</span> </p>
      </div>
    </div>
  );
};

export default Card;
