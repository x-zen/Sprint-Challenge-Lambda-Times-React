import React from 'react';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
    {props.cards.map((card) => <Card headline={card.headline} img={card.img} author={card.author} />)}
    </div>
  )
}

export default Cards;
