import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  loggedIn: null,
  triedToLogIn: null,
};

export const reducer = createSlice({
  name: 'reducer',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    loggingIn: (state, action) => {
      state.loggedIn = action.payload;
    },
    tryingToLogIn: (state, action) => {
      state.triedToLogIn = action.payload
    }
  },
});

export const { loggingIn, tryingToLogIn } = reducer.actions;

export default reducer.reducer;
