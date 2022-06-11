import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div 
      onClick={props.onClick}
      className={props.className}
      style={props.style}
    >
      <h3>{props.title}</h3>
    </div>
  );
}

export default Card;