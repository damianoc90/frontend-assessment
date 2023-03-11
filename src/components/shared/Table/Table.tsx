import React from 'react';
import TableBody from '../Table/TableBody';
import TableHead, { TableHeaderProps } from '../Table/TableHead';

interface TableProps extends TableHeaderProps {
  rows: Array<Array<React.ReactNode>>;
}

export const Table: React.FC<TableProps> = ({
  columns,
  rows,
  handleSorting,
}) => {
  return (
    <table border={1} cellPadding={5}>
      <TableHead columns={columns} handleSorting={handleSorting} />
      <TableBody rows={rows} />
    </table>
  );
};
