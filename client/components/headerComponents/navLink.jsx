import React from 'react';
import { Link } from 'react-router-dom';

export default function navLink({ nav, link }) {
  let linker;
  if (link === '/logout')
    linker = (
      <a className='nav-link' href='/server/logout'>
        {nav}
      </a>
    );
  else
    linker = (
      <Link className='nav-link' to={link}>
        {nav}
      </Link>
    );
  return <li className='nav-link-list'>{linker}</li>;
}
