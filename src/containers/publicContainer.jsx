import React from 'react';
import WelcomeScreen from '../components/publicComponents/welcomeScreen.jsx';
import PublicInfo from '../components/publicComponents/publicInfo.jsx';

export default function publicContainer() {
  return (
    <div>
      <WelcomeScreen />
      <PublicInfo />
    </div>
  );
}
