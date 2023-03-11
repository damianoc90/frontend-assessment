import { useMemo, useState } from 'react';
import { SortedColumnOptions } from './useSortableColumns';

export const useSortableData = <T>(values: T[]) => {
  const [sortedColumn, setSortedColumn] = useState<
    SortedColumnOptions | undefined
  >();

  const handleSorting = ({ columnId, order }: SortedColumnOptions) => {
    setSortedColumn({
      columnId,
      order,
    });
  };

  const sortedRows = useMemo(
    () =>
      sortedColumn?.order
        ? sortData({
            values: [...values],
            sortOption: sortedColumn,
          })
        : values,
    [sortedColumn, values]
  );

  return {
    sortedColumn,
    sortedRows,
    handleSorting,
  };
};

const sortData = <T>({
  values,
  sortOption,
}: {
  values: T[];
  sortOption: SortedColumnOptions;
}) => {
  const columnId = sortOption.columnId as keyof T;

  switch (sortOption.order) {
    case 'asc':
      return values.sort((a, b) => (a[columnId] < b[columnId] ? -1 : 1));
    case 'desc':
      return values.sort((a, b) => (a[columnId] > b[columnId] ? -1 : 1));
    default:
      return values;
  }
};
