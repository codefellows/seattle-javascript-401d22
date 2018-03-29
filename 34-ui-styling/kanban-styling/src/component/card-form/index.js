'use strict';

import React from 'react';

export default class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.card ? {...props.card} : { content: '', categoryID: props.categoryID};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.card) {
      this.setState({...nextProps.card});
    }

    if (nextProps.categoryID) {
      this.setState( {categoryID: nextProps.categoryID });
    }
  }

  handleChange(e) {
    this.setState( {content: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    if (!this.props.card) {
      this.setState( {content: ''} );
    }
  }

  render() {
    return (
      <form className='card-form' onSubmit={this.handleSubmit}>
        <input 
          type='text'
          name='content'
          placeholder='content'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )
  }
}
