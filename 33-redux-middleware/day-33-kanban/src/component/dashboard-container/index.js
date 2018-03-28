'use strict';

import React from 'react';
import {connect} from 'react-redux';

import {categoryCreate as categoryActionCreate} from '../../action/category-actions.js';
import { cardCreate } from './../../action/card-action';

import CategoryForm from '../category-form';
import CategoryItem from '../category-item';


class DashboardContainer extends React.Component {
  render() {
    return (
      <main className='dashboard-container'>
        <h2>Dashboard</h2>

        <CategoryForm
          buttonText='create a category'
          onComplete={this.props.categoryCreate} />

        {this.props.categories.map(item =>
          <CategoryItem 
            key={item.id} 
            category={item} 
            cards={this.props.cards}
            onComplete={this.props.cardCreate}
          />
        )}
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    cards: state.cards,
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryActionCreate(category)),
    cardCreate: (card) => dispatch(cardCreate(card)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
