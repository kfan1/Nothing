import React from 'react';

export default function table({ tableValues }) {
  const tableTable = [];
  const rowID = tableValues._id
  Object.keys(tableValues).forEach((value) => {
    const newId = typeof tableValues[value] === 'string' ? tableValues[value].replaceAll(' ', '').replaceAll('/', '').replaceAll(',', '') : '';
    tableTable.push(
      <td>
        <button
          className='tableButton'
          id={'k'+rowID+newId}
          onClick={() => {
            console.log(newId)
            document
              .querySelector(`#${'k'+rowID+newId}`)
              .setAttribute(
                'selected',
                !JSON.parse(document.querySelector(`#${'k'+rowID+newId}`).getAttribute('selected'))
              );
          }}>
          {tableValues[value]}
        </button>
      </td>
    );
  });

  return <tr>{tableTable}</tr>;
}
