import React from 'react';
import MainContainer from '../containers/mainContainer.jsx';
import PublicContainer from '../containers/publicContainer.jsx';
import { useSelector } from 'react-redux';

export default function mainPage() {
  const loggedIn = useSelector((state) => state.reducer.loggedIn);

  return loggedIn ? (
    <div className='main-div'>
      <MainContainer />
    </div>
  ) : (
    <div className='main-div'>
      <PublicContainer />
    </div>
  );
}