import React, { useEffect } from 'react';
import NavLink from '../components/headerComponents/navLink.jsx';
import CollapsedButton from '../components/headerComponents/collapsedButton.jsx';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";


export default function header() {
  const triedToLogIn = useSelector((state) => state.reducer.triedToLogIn);

  useEffect(() => {
    document.querySelectorAll('.nav-link').forEach((element) => {
      if (element.href === window.location.href) element.id = 'active';
    });
  });

  const navlinks = [
    <NavLink nav='About' link='/about' />,
    <NavLink nav='Projects' link='https://www.github.com/kfan1' />,
  ];
  if (!triedToLogIn) navlinks.push(<NavLink nav='Sign Up' link='/signup' />, <NavLink nav='Log In' link='/login' />);

  return (
    <div>
      <nav className='navbar navbar-expand-lg' data-bs-theme='light'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            <img className='homeclick' src='/assets/images/data-science.png' />
          </Link>
          <CollapsedButton />
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <ul className='navbar-nav ms-auto'>{navlinks}</ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
