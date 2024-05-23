// src/components/PasswordDisplay.js
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PasswordDisplay = ({ password }) => {
  const displayRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      displayRef.current,
      { opacity: 0, y: -20, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "bounce.out" }
    );
  }, [password]);

  return (
    <div ref={displayRef} className="my-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Generated Password:</h2>
      <input
        type="text"
        value={password}
        readOnly
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default PasswordDisplay;
