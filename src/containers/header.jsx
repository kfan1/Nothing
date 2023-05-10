import React from 'react';
import NavLink from '../components/headerComponents/navLink.jsx';
import CollapsedButton from '../components/headerComponents/collapsedButton.jsx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ThemeColor from '../components/headerComponents/themeColor.jsx';

export default function header() {
  const loggedIn = useSelector((state) => state.reducer.loggedIn);

  const navlinks = [
    <NavLink nav='About' link='/about' key='about' />,
    <NavLink nav='Projects' link='https://www.github.com/kfan1' key='projects' />,
  ];
  if (!loggedIn)
    navlinks.push(
      <NavLink nav='Sign Up' link='/signup' key='signup' />,
      <NavLink nav='Log In' link='/login' key='login' />
    );
  else navlinks.push(<NavLink nav='Log out' link='/logout' key='logout' />);
  navlinks.push(<ThemeColor key='themeColor' />);

  return (
    <div>
      <nav className='navbar fixed-top navbar-expand-lg' data-bs-theme='light'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            <img className='homeclick' src='/assets/images/hippo-solid.svg' />
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
