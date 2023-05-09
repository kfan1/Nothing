import React from 'react';
import { useDispatch } from 'react-redux';
import { setPostgresURI } from '../../reducers/reducer';

export default function welcome() {
  const dispatch = useDispatch();
 
  // set uri state to submitted uri state
  // fetch all data and store locally?
  // fetch request to my backend
  // split the url and get tables into two separate calls
  // so that we can get all the tables that the user wants because I don't think theres a select all tables

  // ADD FEATURE:
  // save URI and table data into local database for easy access on new session

  return (
    <div className='userMainScreen'>
      <form>
        <div className='mb-3'>
          <label className='form-label'>Database URI</label>
          <input placeholder='uri' type='text' className='form-control URI-form-control' id='dbURIInput' />
          <input
            type='submit'
            value='Submit'
            onClick={(event) => {
              event.preventDefault();
              dispatch(setPostgresURI(document.querySelector('#dbURIInput').value));
            }}
          />
        </div>
      </form>
    </div>
  );
}
