'use strict';

let initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type) {
    case 'CATEGORY_CREATE':
      return {...state, [payload.id] : []}
    case 'CATEGORY_DELETE':
      let newState = Object.keys(state).reduce((acc, key) => {
        if (key !== payload.id) {
          acc[key] = state[key];
        }
        return acc;
      }, {})
      return newState;
      // return {...state, [payload.id] : undefined}
    case 'CARD_UPDATE':
      var categoryID = payload.categoryID;
      var categoryCards = state[categoryID];
      return {
        ...state,
        [categoryID]: categoryCards.map(card => card.id === payload.id ? payload : card)
      }
    case 'CARD_DELETE' :
      var categoryID = payload.categoryID;
      var categoryCards = state[categoryID];
      return {
        ...state,
        [categoryID]: categoryCards.filter(card => card.id !== payload.id)
      }
    case 'CARD_CREATE':
      let {categoryID} = payload;
      categoryCards = state[categoryID];
      return {...state, [categoryID]: [...categoryCards, payload]};
    default:
      return state;
  }
}
