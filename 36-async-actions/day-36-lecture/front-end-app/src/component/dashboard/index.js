'use strict';

import React from 'react';
import { connect } from 'react-redux';
import ListForm from '../list-form';
import * as util from '../../lib/util';
import * as listActions from '../../actions/list-actions';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    //stuff happens here before render
    this.props.listFetch();
  }


  render() {
    return (
      <div className='dashboard'>
        <h2>Todo App</h2>
        <ListForm 
          onComplete={this.props.listCreate}
          buttonText='Create List'
        />
        {this.props.lists.map(list => 
          <div key={list._id}>
            <p>{list.title}</p>
            <button onClick={() => this.props.listDelete(list)}>X</button>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lists: state.lists,
  }
}

const mapDispatchToProps = (dispatch) => ({
  listCreate: (list) => dispatch(listActions.listCreateRequest(list)),
  listDelete: (list) => dispatch(listActions.listDeleteRequest(list)),
  listFetch: () => dispatch(listActions.listsFetchRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);