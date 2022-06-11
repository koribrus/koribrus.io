import React from 'react';
import Accordion from './Accordion';

const ExpandingCards = () => {
  const images = [
    {
      title: 'Vintage Streets',
      url: 'https://images.unsplash.com/photo-1649668794619-4dd0821d86c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80',
    },
    {
      title: 'Train Crossing',
      url: 'https://images.unsplash.com/photo-1648804595790-f5b84a326956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    },
    {
      title: 'Stark Campus',
      url: 'https://images.unsplash.com/photo-1648908468713-a1108d41c612?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      title: 'Red Seating',
      url: 'https://images.unsplash.com/photo-1626489018174-c64e3f6b437f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    },
    {
      title: 'Terraced Patios',
      url: 'https://images.unsplash.com/photo-1649789975946-7ba541045975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
  ];

  return (
    <div>
      <Accordion images={images} />
    </div>
  );
};

export default ExpandingCards;
