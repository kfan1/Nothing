import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentSelected } from '../../reducers/reducer';

export default function newTableForm({ fetchDB, postgresURI }) {
  const dispatch = useDispatch();
  
  return (
    <div className='tableView'>
      <form>
        <div className='mb-3'>
          <label className='form-label'>Add New Table</label>
          <input placeholder='table name' type='text' className='form-control' id='newTableInput' />
        </div>
        <div className='mb-3'>
          <input
            type='submit'
            value='Add'
            onClick={(event) => {
              event.preventDefault();
              fetchDB(postgresURI, document.querySelector('#newTableInput').value);
              dispatch(setCurrentSelected('delete'));
            }}
          />
        </div>
      </form>
    </div>
  );
}
