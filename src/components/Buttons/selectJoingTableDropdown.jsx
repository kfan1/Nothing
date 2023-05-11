import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentJoinTable } from '../../reducers/reducer';

export default function SelectJoinTableDropdown({ table }) {
  const dispatch = useDispatch();

  return (
    <li>
      <a
        class='dropdown-item tableDropdown'
        onClick={() => {
          document.querySelectorAll('.checkMarkJoin').forEach((el) => (el.innerHTML = ''));
          document.querySelector(`#${table}dropdown`).innerHTML = '<i class="fa-solid fa-check"></i>';
          dispatch(setCurrentJoinTable(table));
        }}>
        {table}
        <span className='checkMarkJoin' id={`${table}dropdown`}></span>
      </a>
    </li>
  );
}
