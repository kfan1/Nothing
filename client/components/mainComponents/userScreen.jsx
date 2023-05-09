import React from 'react';

export default function welcome() {
  // set uri state to submitted uri state
  // fetch all data and store locally?
  // fetch request to my backend

  function fetchDB(URI) {
    fetch('/server/db', {
      body: URI,
    }).then((res) => {
      console.log(res);
      /** request will respond with array of entire data of table
       * for loop possibly to create data on screen?
       */
    });
  }

  return (
    <div className='userMainScreen'>
      <form>
        <div className='mb-3'>
          <label className='form-label'>Database URI</label>
          <input placeholder='uri' type='password' className='form-control' id='dbURI' />
          <input
            type='submit'
            value='Submit'
            onClick={(event) => {
              event.preventDefault();
              fetchDB(document.querySelector('#dbURI').value);
            }}
          />
        </div>
      </form>
    </div>
  );
}
