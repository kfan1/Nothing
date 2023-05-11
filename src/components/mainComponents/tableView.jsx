import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewTableForm from './newTableForm';
import TheKeys from './theKeys.jsx';
import TheTable from './tableObject';
import { setAllTables, setCurrentTable } from '../../reducers/reducer.js';
import GenerateQueryButton from '../Buttons/generateQueryButton';
import AddDBButton from '../Buttons/addDBButton';
import ClearSelectionButton from '../Buttons/clearSelectionButton';
import SelectJoinTable from '../Buttons/selectJoinTableButton';

export default function tableView({ postgresURI }) {
  const currentTable = useSelector((state) => state.reducer.currentTable);
  const newTable = [];
  const dispatch = useDispatch();
  const allTables = useSelector((state) => state.reducer.allTables);
  const currentQuery = useSelector((state) => state.reducer.currentQuery);
  const selectedButtons = useSelector((state) => state.reducer.selectedButtons);

  // ADD FUNCTIONALITY TODO fetch from both mongo and postgres databases

  useEffect(() => {
    Object.keys(selectedButtons).forEach((key) => {
      console.log(selectedButtons[key]);
      if (document.querySelector(`#${key}`)) {
        document
          .querySelector(`#${key}`)
          .setAttribute('selected', selectedButtons[key]);
      }
    });
  });

  function fetchDB(URI, tableName) {
    fetch('/server/db', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ URI, tableName }),
    })
      .then((res) => res.json())
      .then((res) => {
        newTable.push(
          <TheKeys tableKeys={Object.keys(res[0])} key={JSON.stringify(Object.keys(res[0]))} tableName={tableName} />
        );
        res.forEach((el) => {
          newTable.push(<TheTable tableValues={el} key={JSON.stringify(el)} tableName={tableName} />);
        });
      })
      .then(() => {
        dispatch(setCurrentTable(tableName));
      })
      .then(() => {
        dispatch(setAllTables(newTable));
      });
    /** request will respond with array of entire data of table
     * for loop possibly to create data on screen?
     */
  }

  // TODO: add error handling for all promises

  // ADD functionality select from multiple tables and create join queries

  if (allTables[currentTable]) {
    return (
      <div>
        <NewTableForm fetchDB={fetchDB} postgresURI={postgresURI} key={postgresURI} />
        <p className='theQuery'>{currentQuery}</p>
        <GenerateQueryButton />
        <AddDBButton />
        <ClearSelectionButton />
        <SelectJoinTable />
        <h1>{currentTable}</h1>
        <table className='theActualTableFinally' key={'theActualTableFinally'}>
          <tbody key={'theActualTableFinally'}>{allTables[currentTable]}</tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <NewTableForm fetchDB={fetchDB} postgresURI={postgresURI} key={postgresURI} />
        <div style={{ marginLeft: '-10px' }}>
          <AddDBButton />
        </div>
      </div>
    );
  }
}
