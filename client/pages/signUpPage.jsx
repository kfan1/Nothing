import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tryingToLogIn } from '../reducers/reducer';
import { useNavigate } from 'react-router-dom';

export default function signUpPage() {
  const dispatch = useDispatch();
  const triedToLogIn = useSelector((state) => state.reducer.triedToLogIn);
  const navigate = useNavigate();

  const login = (username, password) => {
    fetch('server/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(tryingToLogIn(res.loggedIn));
        if (res.loggedIn) navigate('/');
      });
  };

  let userError;

  if (triedToLogIn === false)
    userError = (
      <p className='error'>
        Username/Password Error (possibly duplicate username, missing username, or missing password, specificity
        functionality will be added soon)
      </p>
    );

  return (
    <div>
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
            value='Submit'
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
