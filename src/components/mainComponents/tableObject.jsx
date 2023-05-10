import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentSelected } from '../../reducers/reducer';

// ADD FUNCTIONALITY
// change all these replaceAlls to regex

export default function table({ tableValues, tableName }) {
  const rowID = tableValues._id;
  const tableTable = [
    <td key={'k' + rowID}>
      <button
        className='tableButton'
        id={'k' + rowID}
        onClick={() => {
          document
            .querySelector(`#${'k' + rowID}`)
            .setAttribute('selected', !JSON.parse(document.querySelector(`#${'k' + rowID}`).getAttribute('selected')));
          dispatch(setCurrentSelected(JSON.stringify({ tableName, columnName: '*', id: tableValues._id, value: '*' })));
        }}>
        <i className='fa-solid fa-check'></i>
      </button>
    </td>,
  ];
  const dispatch = useDispatch();

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
      <td key={'k' + rowID + newId + valueID}>
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
            dispatch(
              setCurrentSelected(
                JSON.stringify({ tableName, columnName: value, id: tableValues._id, value: tableValues[value] })
              )
            );
          }}>
          {tableValues[value]}
        </button>
      </td>
    );
  });

  return <tr>{tableTable}</tr>;
}
