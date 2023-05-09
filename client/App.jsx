import React, { useEffect } from 'react';
import HeaderContainer from './containers/header.jsx';
import FooterContainer from './containers/footer.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/mainPage.jsx';
import SignUp from './pages/signUpPage.jsx';
import LogIn from './pages/logInPage.jsx';
import About from './pages/aboutPage.jsx';
import './stylesheets/styles.scss';
import { loggingIn } from './reducers/reducer.js';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function myFunction() {
      await fetch('/server/isLoggedIn')
        .then((res) => res.json())
        .then((res) => {
          dispatch(loggingIn(res.loggedIn));
        });
    }
    myFunction();
  });

  return (
    <div>
      <HeaderContainer />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <FooterContainer />
    </div>
  );
}

export default App;
