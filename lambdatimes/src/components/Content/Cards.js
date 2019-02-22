import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
    props.cards.map((author, img, headline) => {
      <Card headline={card.headline} img={card.img} author={card.author} />
    });
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;
