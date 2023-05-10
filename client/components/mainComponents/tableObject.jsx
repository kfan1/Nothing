import React from 'react';

// ADD FUNCTIONALITY
// change all these replaceAlls to regex

export default function table({ tableValues }) {
  const tableTable = [];
  const rowID = tableValues._id;
  Object.keys(tableValues).forEach((value) => {
    const valueID =
      typeof value === 'string'
        ? value
            .replaceAll(' ', '')
            .replaceAll('/', '')
            .replaceAll(',', '')
            .replaceAll('.', '')
            .replaceAll("'", '')
            .replaceAll('"', '')
            .replaceAll('.', '')
            .replaceAll('\n', '')
            .replaceAll('!', '')
            .replaceAll(':', '')
        : '';
    const newId =
      typeof tableValues[value] === 'string'
        ? tableValues[value]
            .replaceAll(' ', '')
            .replaceAll('/', '')
            .replaceAll(',', '')
            .replaceAll('.', '')
            .replaceAll("'", '')
            .replaceAll('"', '')
            .replaceAll('.', '')
            .replaceAll('\n', '')
            .replaceAll('!', '')
            .replaceAll(':', '')
        : '';
    tableTable.push(
      <td>
        <button
          className='tableButton'
          id={'k' + rowID + newId + valueID}
          onClick={() => {
            document
              .querySelector(`#${'k' + rowID + newId + valueID}`)
              .setAttribute(
                'selected',
                !JSON.parse(document.querySelector(`#${'k' + rowID + newId + valueID}`).getAttribute('selected'))
              );
          }}>
          {tableValues[value]}
        </button>
      </td>
    );
  });

  return <tr>{tableTable}</tr>;
}
