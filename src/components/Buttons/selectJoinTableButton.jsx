import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentTable, setPostgresURI } from '../../reducers/reducer';

export default function addDBButton() {
  const dispatch = useDispatch();

  return (
    <input
      type='submit'
      className='topTableButton'
      value='New Database'
      onClick={() => {
        dispatch(setPostgresURI(null));
        dispatch(setCurrentTable(null));
      }}
    />
  );
}
