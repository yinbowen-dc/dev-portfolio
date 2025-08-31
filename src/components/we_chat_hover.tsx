'use client';
import { useState } from 'react';

export const WeChatHover = (show_txt : string) => {
  const [showQR, setShowQR] = useState(false);
  
  return (
    <div className="relative inline-block">
      <span 
        className="text-blue-500 cursor-pointer"
        onMouseEnter={() => setShowQR(true)}
        onMouseLeave={() => setShowQR(false)}
      >
        show_txt
      </span>
      {showQR && (
        <div className="absolute z-10 p-2 mt-2 bg-white rounded shadow-lg">
          <img 
            src="vx.png" 
            alt="WeChat QR Code" 
            className="w-32 h-32"
          />
        </div>
      )}
    </div>
  );
};