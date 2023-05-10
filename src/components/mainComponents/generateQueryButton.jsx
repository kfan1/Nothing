import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentQuery } from '../../reducers/reducer';

export default function generateQuery() {
  const dispatch = useDispatch();
  const currentSelected = useSelector((state) => state.reducer.currentSelected);

  function fetchQuery() {
    fetch('/server/fetchquery', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(currentSelected),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        dispatch(setCurrentQuery(res.query));
      });
  }

  return (
    <input
      type='submit'
      value='Generate Query'
      onClick={() => {
        fetchQuery();
      }}
    />
  );
}
