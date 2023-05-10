import React from 'react';

export default function theKeys({ tableKeys }) {
  const tableTop = [];

  tableKeys.forEach((key) => {
    const newId =
      typeof key === 'string'
        ? key
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
    tableTop.push(
      <th>
        <button
          className='tableButtonKey'
          id={'k' + newId}
          onClick={() => {
            document
              .querySelector(`#${'k' + newId}`)
              .setAttribute(
                'selected',
                !JSON.parse(document.querySelector(`#${'k' + newId}`).getAttribute('selected'))
              );
          }}>
          {key}
        </button>
      </th>
    );
  });
  return <tr>{tableTop}</tr>;
}
