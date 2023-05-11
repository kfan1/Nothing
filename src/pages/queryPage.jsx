import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPastQueries, deleteQuery } from '../reducers/reducer';

export default function aboutPage() {
  const pastQueries = useSelector((state) => state.reducer.pastQueries);
  const user = useSelector((state) => state.reducer.currentUser);
  const dispatch = useDispatch();

  let allQueries = []
  function getQueries(username) {
    fetch(`/server/queries/${username}`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(getPastQueries(res.queries));
      });
  }

  function deleteQueryServer(query) {
    fetch(`/server/deleteQuery/${query}`);
  }

  for (let i = 0; i < pastQueries.length; i++) {
    allQueries.push(
      <div>
        <p>
          {pastQueries[i]}<div className='gapHere'></div>
          <a
            className='deleteQueryButton'
            onClick={() => {
              deleteQueryServer(pastQueries[i]);
              dispatch(deleteQuery(pastQueries[i]));
            }}>
            <i className='fa-solid fa-trash'></i>
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className='main-div'>
      <input type='submit' className='pastQueryButton' value='View Past Queries' onClick={() => getQueries(user)} />
      {allQueries}
    </div>
  );
}
