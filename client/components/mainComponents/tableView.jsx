import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewTableForm from './newTableForm';
import TheKeys from './theKeys.jsx';
import TheTable from './tableObject';
import { setAllTables, setCurrentTable } from '../../reducers/reducer.js';

export default function tableView({ postgresURI }) {
  const currentTable = useSelector((state) => state.reducer.currentTable);
  const newTable = [];
  const dispatch = useDispatch();
  const allTables = useSelector((state) => state.reducer.allTables);

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
        newTable.push(<TheKeys tableKeys={Object.keys(res[0])} key={JSON.stringify(Object.keys(res[0]))} />);
        res.forEach((el) => {
          newTable.push(<TheTable tableValues={el} key={JSON.stringify(el)} />);
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

  if (allTables[currentTable]) {
    let gridWidth = '';
    console.log(allTables[currentTable][0].key);
    allTables[currentTable][0].key.split(',').forEach(() => (gridWidth += ' 1fr'));
    return (
      <div>
        <NewTableForm fetchDB={fetchDB} postgresURI={postgresURI} key={postgresURI} />
        <h1>{currentTable}</h1>
        <div className='theActualTableFinally' style={{ gridTemplateColumns: gridWidth }}>
          {allTables[currentTable]}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <NewTableForm fetchDB={fetchDB} postgresURI={postgresURI} key={postgresURI} />
      </div>
    );
  }
}
