import React from 'react';
import PropTypes from 'prop-types'

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={ props.img } alt='' />
        </div>
        <span>By {props.author}</span>
      </div>
    </div>
  );
};

Card.PropTypes = {
  data: PropTypes.string,
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string,
}
export default Card;
