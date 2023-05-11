import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentSelected, setSelectedButtons } from '../../reducers/reducer';

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
        document.querySelectorAll('[selected="true"]').forEach((button) => {
          button.setAttribute('selected', false);
        });
      }}
    />
  );
}
