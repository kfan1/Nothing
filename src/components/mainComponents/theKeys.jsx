import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentSelected } from '../../reducers/reducer';

export default function theKeys({ tableKeys, tableName }) {
  const tableTop = [
    <th key='selectAll'>
      <button className='tableButtonKey'>Row</button>
    </th>,
  ];
  const dispatch = useDispatch();

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
            .replaceAll('(', '')
        : '';
    tableTop.push(
      <th key={`#${'k' + newId}`}>
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
            dispatch(setCurrentSelected(JSON.stringify({ tableName, columnName: key, id: '*' })));
          }}>
          {key}
        </button>
      </th>
    );
  });
  return <tr>{tableTop}</tr>;
}
