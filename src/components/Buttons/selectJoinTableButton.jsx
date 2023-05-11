import React from 'react';
import { useSelector } from 'react-redux';
import SelectJoinTableDropdown from './selectJoingTableDropdown';

export default function SelectJoinTable() {
  const allTables = useSelector((state) => state.reducer.allTables);
  const allTableNames = [];
  Object.keys(allTables).forEach((tableName) => {
    allTableNames.push(<SelectJoinTableDropdown table={tableName} key={tableName} />);
  });

  return (
    <div className='dropdown nextToTheOtherButtons'>
      <button
        type='button'
        className='btn btn-secondary dropdown-toggle selectJoinTable'
        data-bs-toggle='dropdown'
        aria-expanded='false'>
        Select Join Table
      </button>
      <ul class='dropdown-menu'>
        {allTableNames}
      </ul>
    </div>
  );
}
