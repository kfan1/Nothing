import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentJoinTable, setCurrentSelected, setSelectedButtons } from '../../reducers/reducer';

export default function clearSelectionButton() {
  const dispatch = useDispatch();

  return (
    <input
      type='submit'
      className='topTableButton clearSelectionButton'
      value='Clear Selection'
      onClick={() => {
        dispatch(setCurrentSelected('delete'));
        dispatch(setSelectedButtons('delete'));
        dispatch(setCurrentJoinTable(null));
        document.querySelectorAll('.checkMarkJoin').forEach((el) => (el.innerHTML = ''));
        document.querySelectorAll('[selected="true"]').forEach((button) => {
          button.setAttribute('selected', false);
        });
      }}
    />
  );
}
