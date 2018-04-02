'use strict';

import reducer from '../reducers';
import thunk from './redux-thunk';
import reporter from './redux-reporter';
import { createStore, applyMiddleware } from 'redux';

const appCreateStore = () => (
  createStore(reducer, applyMiddleware(thunk, reporter))
)

export default appCreateStore;