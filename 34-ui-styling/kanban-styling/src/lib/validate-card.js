'use strict';

const validateCard = store => next => action => {
  const isCard = action.type && action.type.startsWith('CARD');
    if (isCard) {
      try {
        const card = action.payload;
        const notValid = !card.id || !card.content || !card.categoryID;
        if (notValid) {
          throw new Error('VALIDATION ERROR: card ust include id, content, and categoryID');
        } else {
          return next(action);
        }
      } catch (err) {
        console.error(err);
    } 
  } else {
    return next(action);
  }
}

export default validateCard;