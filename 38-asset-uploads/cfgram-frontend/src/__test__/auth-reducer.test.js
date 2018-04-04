import authReducer from '../reducer/auth.js';

describe('Auth Reducer', () => {
  test('initial state should be null', () => {
    let result = authReducer(undefined, { type: null });
    expect(result).toEqual(null);
  });

  test('the state should be returned if no action type is presented', () => {
    let state = { username: 'testusername', email: 'testuser@email.net', password: '123456789' };
    let result = authReducer(state, { type: null });
    expect(result).toEqual(state);
  });
});
