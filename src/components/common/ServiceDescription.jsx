import React from 'react';

const ServiceDescription = ({ name, description, bulletPoints, picture, reverseOrder }) => {
  const cardClasses = `flex flex-col sm:flex-row items-center p-6 bg-white rounded-lg shadow-lg relative ${
    reverseOrder ? 'flex-row-reverse' : ''
  }`;

  return (
    <div className={cardClasses}>
      <div className='sm:w-1/3 relative max-w-full'>
        <img
          className="w-full h-auto max-h-full object-cover rounded-lg relative"
          src={picture}
          alt={name}
        />
      </div>
      <div className='sm:w-2/3 sm:pl-6 mt-4 sm:mt-0'>
        <h3 className='text-2xl font-bold mb-4'>{name}</h3>
        <p className='mb-4'>{description}</p>
        <ul className='list-disc list-inside'>
          {bulletPoints.map((point, index) => (
            <li key={index} className='mb-2'>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceDescription;
