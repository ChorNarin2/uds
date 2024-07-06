"use client";
import React from "react";

const ECommerce: React.FC = () => {
  return (  
    
    <div className="grid grid-cols-4">
      <div className="max-w-sm rounded overflow-hidden shadow-lg w-[200px] bg-white">
        <img className="w-[200px] h-[200px]" src="/images/universities/itc.jpeg" alt="Sunset in the mountains"></img> 
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 flex justify-center items-center">ITC</div>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg w-[200px] bg-white">
        <img className="w-[200px] h-[200px]" src="/images/universities/Rupp.png" alt="Sunset in the mountains"></img> 
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 flex justify-center items-center">Rupp</div>
        </div>
      </div>

    </div>
  );
};

export default ECommerce;
