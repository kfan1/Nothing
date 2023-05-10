import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentQuery } from '../../reducers/reducer';

export default function generateQuery() {
  const dispatch = useDispatch();
  const currentSelected = useSelector((state) => state.reducer.currentSelected);

  function fetchQuery() {
    fetch('/server/fetchQuery', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(currentSelected),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.body);
        dispatch(setCurrentQuery(res.body));
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
