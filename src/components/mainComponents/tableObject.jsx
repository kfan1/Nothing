import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentSelected, setSelectedButtons } from '../../reducers/reducer';

// ADD FUNCTIONALITY
// change all these replaceAlls to regex

export default function table({ tableValues, tableName }) {
  const dispatch = useDispatch();

  const rowID = tableValues._id;
  const tableTable = [
    <td key={'k' + rowID}>
      <button
        className='tableButton'
        id={'k' + rowID + tableName}
        onClick={() => {
          dispatch(setSelectedButtons('k' + rowID + tableName));
          dispatch(setCurrentSelected(JSON.stringify({ tableName, columnName: '*', id: tableValues._id, value: '*' })));
        }}>
        <i className='fa-solid fa-check'></i>
      </button>
    </td>,
  ];

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
            .replaceAll('(', '')
            .replaceAll(')', '')
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
            .replaceAll('(', '')
            .replaceAll(')', '')
        : '';
    tableTable.push(
      <td key={'k' + rowID + newId + valueID}>
        <button
          className='tableButton'
          id={'k' + rowID + newId + valueID}
          onClick={() => {
            dispatch(setSelectedButtons('k' + rowID + newId + valueID));
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
