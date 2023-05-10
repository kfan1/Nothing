import React from 'react';
import UserScreen from '../components/mainComponents/userScreen';
import { useSelector } from 'react-redux';
import TableView from '../components/mainComponents/tableView';


export default function main() {
  const postgresURI = useSelector((state) => state.reducer.postgresURI);  
  

  /**@TODO save databases and tables and queries in seperate database */

  if (postgresURI !== null) {
    return (
      <div className='main-div'>        
        <TableView postgresURI={postgresURI} />
      </div>
    );
  }
  return (
    <div className='main-div'>
      <UserScreen />
    </div>
  );
}
