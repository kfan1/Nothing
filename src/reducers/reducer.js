import { createSlice } from '@reduxjs/toolkit';

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
  currentJoinTable: null,
  selectedButtons: {},
  pastQueries: [],
  loadingState: null,
  funStuff: [],
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
    setLoadingState: (state, action) => {
      state.loadingState = action.payload;
    },
    getPastQueries: (state, action) => {
      state.pastQueries = action.payload;
    },
    deleteQuery: (state, action) => {
      state.pastQueries.splice(state.pastQueries.indexOf(action.payload), 1);
    },
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
    setCurrentJoinTable: (state, action) => {
      state.currentJoinTable = action.payload;
    },
    setSelectedButtons: (state, action) => {
      if (action.payload === 'delete') state.selectedButtons = {};
      if (state.selectedButtons[action.payload] === undefined) state.selectedButtons[action.payload] = true;
      else state.selectedButtons[action.payload] = !state.selectedButtons[action.payload];
    },
    setFunStuff: (state, action) => {
      state.funStuff = action.payload;
    },
  },
});

export const {
  setFunStuff,
  setLoadingState,
  deleteQuery,
  getPastQueries,
  loggingIn,
  tryingToLogIn,
  changeTheme,
  setUser,
  setPostgresURI,
  setCurrentTable,
  setAllTables,
  setCurrentSelected,
  setCurrentQuery,
  setCurrentJoinTable,
  setSelectedButtons,
} = reducer.actions;

export default reducer.reducer;
