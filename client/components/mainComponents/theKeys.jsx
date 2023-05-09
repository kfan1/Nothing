import React from 'react';

export default function theKeys({ tableKeys }) {
  const tableTop = [];
  tableKeys.forEach((key) => {
    tableTop.push(
      <div>
        <h3>{key}</h3>
      </div>
    );
  });
  return <div>{tableTop}</div>;
}
