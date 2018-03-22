'use strict';

import './_dashboard-container.scss';
import React from 'react';
import uuid from 'uuid/v1';

import ExpenseCreateForm from '../expense-create-form';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.expenseCreate = this.expenseCreate.bind(this);
  }

  expenseCreate(expense) {
    expense.id = uuid();
    this.props.app.setState(state => ({
      expenses: [...state.expenses, expense]
    }));
  }

  render() {
    console.log(this.props, 'PROPS INSIDE DASHBOARD CONTAINER')
    return (
      <div className='dashboard-container'>
        <ExpenseCreateForm 
          handleExpenseCreate={this.expenseCreate} 
        />
        {
          this.props.app.state.expenses.length > 0 && 
          <ul>
            {this.props.app.state.expenses.map(item => <li key={item.id}>{item.title}</li>)}
          </ul>
        }
      </div>
    )
  }
}

export default DashboardContainer;
