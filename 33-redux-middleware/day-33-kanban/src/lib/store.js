'use strict';

import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import reporter from './redux-reporter';
import validateCategory from './validate-category';
import validateCard from './validate-card';

// console.log(createStore)
console.log(applyMiddleware)
export default () => createStore(reducer, applyMiddleware(reporter, validateCategory, validateCard));
