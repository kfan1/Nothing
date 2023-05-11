import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentQuery } from '../../reducers/reducer';

export default function generateQuery() {
  const dispatch = useDispatch();
  const currentSelected = useSelector((state) => state.reducer.currentSelected);
  const currentJoinTable = useSelector((state) => state.reducer.currentJoinTable);
  const allTables = useSelector((state) => state.reducer.allTables);
  const currentUser = useSelector((state) => state.reducer.currentUser);

  function fetchQuery() {
    const sendObj = { currentSelected, currentJoinTable };
    let separateJoinTable = true;
    for (let i = 0; i < currentSelected.length; i++) {
      if (JSON.parse(currentSelected[i]).tableName === currentJoinTable) {
        separateJoinTable = false;
        break;
      }
    }

    if (separateJoinTable) sendObj.joinTable = allTables[currentJoinTable];

    fetch('/server/fetchquery', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendObj),
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(setCurrentQuery(res.query));
        return res;
      })
      .then((res) => {
        fetch('/server/saveQuery', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query: res.query, user: currentUser }),
        }).then(() => {
        });
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
