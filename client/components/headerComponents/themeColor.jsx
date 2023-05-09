import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../reducers/reducer';

export default function themeToggler() {
  const dispatch = useDispatch();
  const colorTheme = useSelector((state) => state.reducer.colorTheme);
  let currTheme;
  let selectedDay;
  let selectedNight;

  if (window.matchMedia('(prefers-color-scheme: dark)').matches && colorTheme === null) {
    dispatch(changeTheme('dark'));
  }

  document.querySelector('body').setAttribute('theme', colorTheme);

  if (colorTheme === 'dark') {
    currTheme = <i className='fa-solid fa-moon'></i>;
    selectedNight = <i className='fa-solid fa-check'></i>;
  } else {
    currTheme = <i className='fa-solid fa-sun'></i>;
    selectedDay = <i className='fa-solid fa-check'></i>;
  }

  return (
    <div className='dropdown'>
      <a className='nav-link dropdown-toggle' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
        {currTheme}
      </a>
      <ul className='dropdown-menu'>
        <li>
          <a className='dropdown-item' onClick={() => dispatch(changeTheme('light'))}>
            <i className='fa-solid fa-sun'></i> Light
            {selectedDay}
          </a>
        </li>
        <li>
          <a className='dropdown-item' onClick={() => dispatch(changeTheme('dark'))}>
            <i className='fa-solid fa-moon'></i> Dark
            {selectedNight}
          </a>
        </li>
      </ul>
    </div>
  );
}
