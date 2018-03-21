import authReducer from '../../reducers/auth';

test('should set the UID when logging in', () => {
  const action = {
    type: 'LOGIN',
    uid: 'abc123'
  };
  const state = authReducer({}, action);
  expect(state).toEqual({
    uid: action.uid
  });
});

test('should remove uid when logging out', () => {
  const action = {
    type: 'LOGOUT',
  };

  const currentState = {
    uid: 'ksowksow'
  };
  const state = authReducer(currentState, action);
  expect(state).toEqual({});
});