'use strict';

import './_card-item.scss';
import React from 'react';
import { connect } from 'react-redux';

import CardForm from './../card-form/index';
import { cardUpdate, cardDelete } from '../../action/card-action';

class CardItems extends React.Component {
  render() {
    const { cards, cardDelete, cardUpdate } = this.props;
    return (
      <ul className='card-list'>
        { cards.map(card => console.log(card))}
        { cards.map(card => 
          <li className='card-item' key={card}>
            <p>{card.content}</p>
            <button onClick={() => cardDelete(card)}>X</button>
            <CardForm 
              card={card}
              buttonText='UPDATE CARD'
              onComplete={cardUpdate}
            />
          </li>
        )}
      </ul>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  cardUpdate: (card) => dispatch(cardUpdate(card)),
  cardDelete: (card) => dispatch(cardDelete(card)),
})

export default connect(null, mapDispatchToProps)(CardItems);
