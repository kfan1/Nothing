import React from 'react';
import UserScreen from '../components/mainComponents/userScreen';
import { useSelector } from 'react-redux';
import TableView from '../components/mainComponents/tableView';


export default function main() {
  const postgresURI = useSelector((state) => state.reducer.postgresURI);

  if(postgresURI !== null) {
    return (
      <TableView postgresURI={postgresURI} />
    )
  }
  return (
    <div>
      <UserScreen />
    </div>
  );

}
