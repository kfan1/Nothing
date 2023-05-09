import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tryingToLogIn, loggingIn } from '../reducers/reducer';
import { useNavigate } from 'react-router-dom';

export default function logInPage() {
  const dispatch = useDispatch();
  const triedToLogIn = useSelector((state) => state.reducer.triedToLogIn);
  const navigate = useNavigate();

  const login = (username, password) => {
    fetch('server/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(tryingToLogIn(res.loggedIn));
        if (res.loggedIn) {
          dispatch(loggingIn(res.loggedIn));
          navigate('/');
        }
      });
  };

  let userError;

  if (triedToLogIn === false)
    userError = (
      <p className='error'>
        Username/Password not found
      </p>
    );

  return (
    <div className='main-div'>
      <form>
        <div className='mb-3'>
          <label className='form-label'>Username</label>
          <input placeholder='username' type='text' className='form-control' id='username' />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Password</label>
          <input placeholder='password' type='password' className='form-control' id='password' />
          {userError}
          <input
            type='submit'
            value='Log In'
            onClick={(event) => {
              event.preventDefault();
              login(document.querySelector('#username').value, document.querySelector('#password').value);
            }}
          />
        </div>
      </form>
    </div>
  );
}
