import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: null,
  triedToLogIn: null,
  colorTheme: null,
  currentUser: null,
  postgresURI: null,
  currentTable: null,
  allTables: {},
  currentSelected: [],
  currentQuery: null,
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
      state.triedToLogIn = action.payload;
    },
    changeTheme: (state, action) => {
      state.colorTheme = action.payload;
    },
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setPostgresURI: (state, action) => {
      state.postgresURI = action.payload;
    },
    setCurrentTable: (state, action) => {
      state.currentTable = action.payload;
    },
    setAllTables: (state, action) => {
      state.allTables[state.currentTable] = action.payload;
    },
    setCurrentSelected: (state, action) => {
      if (action.payload === 'delete') state.currentSelected = [];
      else if (state.currentSelected.includes(action.payload))
        state.currentSelected.splice(state.currentSelected.indexOf(action.payload), 1);
      else state.currentSelected.push(action.payload);
    },
    setCurrentQuery: (state, action) => {
      // state.currentQuery = JSON.stringify(state.currentSelected);
      state.currentQuery = action.payload;
    },
  },
});

export const {
  loggingIn,
  tryingToLogIn,
  changeTheme,
  setUser,
  setPostgresURI,
  setCurrentTable,
  setAllTables,
  setCurrentSelected,
  setCurrentQuery,
} = reducer.actions;

export default reducer.reducer;