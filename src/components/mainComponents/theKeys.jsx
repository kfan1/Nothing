import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentSelected, setSelectedButtons } from '../../reducers/reducer';

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
          id={'k' + newId + tableName}
          onClick={() => {
            dispatch(setSelectedButtons('k' + newId + tableName));
            dispatch(setCurrentSelected(JSON.stringify({ tableName, columnName: key, id: '*' })));
          }}>
          {key}
        </button>
      </th>
    );
  });
  return <tr>{tableTop}</tr>;
}
