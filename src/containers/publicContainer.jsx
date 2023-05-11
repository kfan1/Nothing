import React from 'react';
import WelcomeScreen from '../components/publicComponents/welcomeScreen.jsx';
import PublicInfo from '../components/publicComponents/publicInfo.jsx';
import { useSelector } from 'react-redux';
import FunButton from '../components/publicComponents/funButton.jsx';

export default function publicContainer() {
  const funStuff = useSelector((state) => state.reducer.funStuff);
  
  return (
    <div>
      {funStuff}
      <FunButton />
      <WelcomeScreen />
      <PublicInfo />
    </div>
  );
}
