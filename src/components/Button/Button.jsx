import React from 'react';
import './Button.css'
function Button({ text, width='52px' }) {
  const buttonStyles = {
    width: width
  };

  return (
    
      <button style={buttonStyles}>{text}</button>
    
  );
}

export default Button;
