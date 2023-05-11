import React from 'react';
import { useDispatch } from 'react-redux';
import { setFunStuff } from '../../reducers/reducer';

export default function FunButton() {
  const dispatch = useDispatch();
  const funArray = [
    <div className='dancingHippoContainer'>
         <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
      <div class='dancingHippo'>
        <i className='fa-solid fa-hippo'></i>
      </div>
    </div>,
  ];
  function doTheThing() {
    dispatch(setFunStuff(funArray));
    setTimeout(() => {
      dispatch(setFunStuff([]));
    }, 10000);
  }

  return <button className='funStuffButton' onClick={() => doTheThing()} />;
}
