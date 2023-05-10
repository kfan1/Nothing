import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentQuery } from '../../reducers/reducer';

export default function generateQuery() {
  const dispatch = useDispatch();

  return (
    <input
      type='submit'
      value='Generate Query'
      onClick={() => {
        dispatch(setCurrentQuery());
      }}
    />
  );
}
