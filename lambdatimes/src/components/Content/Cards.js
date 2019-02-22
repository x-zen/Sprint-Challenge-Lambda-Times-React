import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
    this.state.cards.map((author, img, headline) => {
      <Card headline={headline} img={img} author={author} />
    });
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;
