'use strict';

import './_category-item.scss';
import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import CardForm from '../card-form';
import CardItems from '../card-item';

import {categoryUpdate, categoryDelete} from '../../action/category-actions.js';
import { cardCreate } from './../../action/card-action';
import { renderIf } from './../../lib/util';
class CategoryItem extends React.Component {
  render() {
    let {category, categoryUpdate, categoryDelete, cards} = this.props;

    return (
      <section className='category-item'>
        <div>
          <div className='content'>
            <h2>{category.title}</h2>
            <button onClick={() => categoryDelete(category)}>X</button>
          </div>
          <div className='edit'>
            <CategoryForm
              buttonText='update'
              category={category}
              onComplete={categoryUpdate} />
          </div>
        </div>
        <div className='cards-container'>
          <CardForm 
            categoryID={category.id}
            buttonText='CREATE CARD'
            onComplete={this.props.cardCreate}
          />
          { renderIf(cards[category.id].length, <CardItems cards={cards[category.id]} />)}
        </div>
      </section>
    )
  }
}

let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
  cardCreate: (card) => dispatch(cardCreate(card)),
});

export default connect(null, mapDispatchToProps)(CategoryItem);
