import React from 'react';

interface TableBodyProps {
  rows: Array<Array<React.ReactNode>>;
}

export const TableBody: React.FC<TableBodyProps> = ({ rows }) => {
  return (
    <tbody>
      {rows.map((row, rowIndex) => (
        <tr key={`table-row-${rowIndex}`}>
          {row.map((column, colIndex) => (
            <td key={`table-cell-${rowIndex}-${colIndex}`}>{column}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
