import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import './Accordion.css';

const Accordion = ({ images }) => {
  const { desktop } = useSelector((state) => state.display);
  const [activeIndex, setActiveIndex] = useState(0);

  const onImageClick = (index) => {
    setActiveIndex(index);
  };

  // * conditional render to reduce number of images in mobile view
  // eslint-disable-next-line array-callback-return
  const renderedImages = images.map((image, index) => {
    if (desktop) {
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
    } else {
      if (index < 3) {
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
      }
    }
  });

  return <div className='image-container'>{renderedImages}</div>;
};

export default Accordion;
