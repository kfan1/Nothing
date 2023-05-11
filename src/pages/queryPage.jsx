import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPastQueries, deleteQuery, setLoadingState } from '../reducers/reducer';

export default function aboutPage() {
  const pastQueries = useSelector((state) => state.reducer.pastQueries);
  const user = useSelector((state) => state.reducer.currentUser);
  const loadingState = useSelector((state) => state.reducer.loadingState);
  const dispatch = useDispatch();

  let allQueries = [];
  function getQueries(username) {
    dispatch(
      setLoadingState(
        <div class='center'>
          <div class='wave0'><i className='fa-solid fa-hippo'></i></div>
          <div class='wave1'><i className='fa-solid fa-hippo'></i></div>
          <div class='wave2'><i className='fa-solid fa-hippo'></i></div>
          <div class='wave3'><i className='fa-solid fa-hippo'></i></div>
          <div class='wave4'><i className='fa-solid fa-hippo'></i></div>
          <div class='wave5'><i className='fa-solid fa-hippo'></i></div>
          <div class='wave6'><i className='fa-solid fa-hippo'></i></div>
          <div class='wave7'><i className='fa-solid fa-hippo'></i></div>
          <div class='wave8'><i className='fa-solid fa-hippo'></i></div>
          <div class='wave9'><i className='fa-solid fa-hippo'></i></div>
        </div>
      )
    );

    setTimeout(() => {
      fetch(`/server/queries/${username}`)
        .then((res) => res.json())
        .then((res) => {
          dispatch(getPastQueries(res.queries));
        })
        .then(() => {
          dispatch(setLoadingState(null));
        });
    }, 2000);
  }

  function deleteQueryServer(query) {
    fetch(`/server/deleteQuery/${query}`);
  }

  for (let i = 0; i < pastQueries.length; i++) {
    allQueries.push(
      <div className='queryList'>
        {pastQueries[i]}
        <div className='gapHere'></div>
        <a
          className='deleteQueryButton'
          onClick={() => {
            deleteQueryServer(pastQueries[i]);
            dispatch(deleteQuery(pastQueries[i]));
          }}>
          <i className='fa-solid fa-trash'></i>
        </a>
      </div>
    );
  }

  return (
    <div className='main-div'>
      <input type='submit' className='pastQueryButton' value='View Past Queries' onClick={() => getQueries(user)} />
      {loadingState}
      {allQueries}
    </div>
  );
}
