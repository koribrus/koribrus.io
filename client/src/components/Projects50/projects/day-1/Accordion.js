import React, { useState } from 'react';
import Card from './Card';
import './Accordion.css';

const Accordion = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onImageClick = (index) => {
    setActiveIndex(index);
  };

  const renderedImages = images.map((image, index) => {
    const active = index === activeIndex ? 'active-ec' : '';

    return (
      <React.Fragment key={image.title}>
        <Card
          onClick={() => onImageClick(index)}
          className={`card-ec ${active}`}
          style={{ backgroundImage: `url(${image.url})` }}
          title={image.title}
        />
      </React.Fragment>
    );
  });

  return <div className='image-container'>{renderedImages}</div>;
};

export default Accordion;
