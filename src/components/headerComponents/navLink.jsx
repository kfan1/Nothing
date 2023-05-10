import React from 'react';
import { Link } from 'react-router-dom';
import { tryingToLogIn } from '../../reducers/reducer';
import { useDispatch } from 'react-redux';

export default function navLink({ nav, link }) {
  const dispatch = useDispatch();
  let linker;
  if (link === '/logout')
    linker = (
      <a className='nav-link' href='/server/logout'>
        {nav}
      </a>
    );
  else
    linker = (
      <Link
        className='nav-link'
        to={link}
        href={link}
        onClick={() => {
          dispatch(tryingToLogIn(null));
        }}>
        {nav}
      </Link>
    );
  return <li className='nav-link-list'>{linker}</li>;
}
