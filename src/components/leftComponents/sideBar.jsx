import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSelected, setCurrentTable } from '../../reducers/reducer';

export default function sideBar() {
  const dispatch = useDispatch();
  const allTables = useSelector((state) => state.reducer.allTables);

  const navlinks = [];

  Object.keys(allTables).forEach((tableName) => {
    navlinks.push(
      <li key={'unique'+tableName}>
        <a
          className='dropdown-item sidenav-drop'
          onClick={() => {
            dispatch(setCurrentTable(tableName));
            dispatch(setCurrentSelected('delete'));
          }}>
          {tableName}
        </a>
      </li>
    );
  });

  return (
    <div className='sidenav'>
      <div className='dropdown'>
        <a className='nav-link dropdown sidenavlink' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
          Your Tables
        </a>
        <ul className='dropdown-menu sidenav-menu'>{navlinks}</ul>
      </div>
    </div>
  );
}