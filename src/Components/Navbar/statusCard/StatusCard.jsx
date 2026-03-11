import React from 'react';
import vector from '../../../assets/vector1.png';


const StatusCard = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-4 p-6">
      
      
      <div 
        className="relative flex-1 h-40 rounded-lg overflow-hidden flex flex-col items-center justify-center text-white shadow-lg"
        style={{
          background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)'
        }}
      >
       
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url(${vector})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay'
          }}
        ></div>
        
        
        <div className="relative z-10 text-center">
          <p className="text-sm font-medium opacity-90 mb-1">In-Progress</p>
          <h2 className="text-5xl font-bold">0</h2>
        </div>
      </div>

      
      <div 
        className="relative flex-1 h-40 rounded-lg overflow-hidden flex flex-col items-center justify-center text-white shadow-lg"
        style={{
          background: 'linear-gradient(135deg, #22c55e 0%, #059669 100%)'
        }}
      >
      
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url(${vector})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay'
          }}
        ></div>

        
        <div className="relative z-10 text-center">
          <p className="text-sm font-medium opacity-90 mb-1">Resolved</p>
          <h2 className="text-5xl font-bold">0</h2>
        </div>
      </div>

    </div>
    );
};

export default StatusCard;