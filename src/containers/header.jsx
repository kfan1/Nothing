import React from 'react';
import NavLink from '../components/headerComponents/navLink.jsx';
import CollapsedButton from '../components/headerComponents/collapsedButton.jsx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ThemeColor from '../components/headerComponents/themeColor.jsx';

export default function header() {
  const loggedIn = useSelector((state) => state.reducer.loggedIn);
  let navlinks;
  if (!loggedIn)
    navlinks = [
      <NavLink nav='Projects' link='https://www.github.com/kfan1' key='projects' />,
      <NavLink nav='Sign Up' link='/signup' key='signup' />,
      <NavLink nav='Log In' link='/login' key='login' />,
      <ThemeColor key='themeColor' />,
    ];
  else {
    navlinks = [
      <NavLink nav='Projects' link='https://www.github.com/kfan1' key='projects' />,
      <NavLink nav='Queries' link='/queries' key='queries' />,
      <NavLink nav='Log out' link='/logout' key='logout' />,
      <ThemeColor key='themeColor' />,
    ];
  }

  return (
    <div>
      <nav className='navbar fixed-top navbar-expand-lg' data-bs-theme='light'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            <img className='homeclick' src='assets/images/hippo-solid.svg' />
          </Link>
          <CollapsedButton key='collapsedButton' />
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <ul className='navbar-nav ms-auto'>{navlinks}</ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
