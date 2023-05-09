import React from 'react';

export default function table({ tableValues }) {
  const tableTable = [];
  Object.keys(tableValues).forEach((value) => {
    tableTable.push(
      <div>
        <p>{tableValues[value]}</p>
      </div>
    );
  })

  return <div>{tableTable}</div>;
}
