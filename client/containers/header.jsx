import React from 'react';
import NavLink from '../components/headerComponents/navLink.jsx';
import CollapsedButton from '../components/headerComponents/collapsedButton.jsx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ThemeColor from '../components/headerComponents/themeColor.jsx';

export default function header() {
  const loggedIn = useSelector((state) => state.reducer.loggedIn);

  const navlinks = [
    <NavLink nav='About' link='/about' />,
    <NavLink nav='Projects' link='https://www.github.com/kfan1' />,
  ];
  if (!loggedIn) navlinks.push(<NavLink nav='Sign Up' link='/signup' />, <NavLink nav='Log In' link='/login' />);
  else navlinks.push(<NavLink nav='Log out' link='/logout' />);
  navlinks.push(<ThemeColor />);

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
