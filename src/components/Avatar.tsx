import React from 'react';
import './Avatar.scss';

const Avatar = ({ name = 'Skeleton', src = '😀', className ='' }) => {
  return (
    <div className={`d-flex flex-column align-items-center ${className}`}>
      <div className="position-relative">
        <div 
          className="rounded-circle d-flex justify-content-center align-items-center"
          style={{ width: '100px', height: '100px'}}
        >
            <img src={src} alt={name} className='rounded-circle ' style={{ width: '5rem', height: '5rem', fontSize: '50px' }} /> 
        </div>
        <div 
          className="position-absolute rounded-circle d-flex justify-content-center align-items-center"
          style={{ width: '30px', height: '30px', right: '0', top: '0', backgroundColor: '#A5BAA9' }}
        >
        </div>
      </div>
      <div 
        className="bg-green-light text-light text-center px-3 py-1 rounded-3"
        style={{ minWidth: '120px', marginTop: '-1rem', zIndex: 3 }}
      >
        {name}
      </div>
    </div>
  );
};

export default Avatar;
