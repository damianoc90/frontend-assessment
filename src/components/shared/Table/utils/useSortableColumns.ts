import { TableColumn } from '../TableHead';

export type OrderType = 'asc' | 'desc' | undefined;
export type SortedColumnOptions = { columnId: string; order: OrderType };

export const useSortableColumns = ({
  columns,
  sortedColumn,
}: {
  columns: TableColumn[];
  sortedColumn?: SortedColumnOptions;
}) => {
  if (!sortedColumn) {
    return columns;
  }

  const { columnId, order } = sortedColumn;
  return columns.map((column) =>
    column.id === columnId ? { ...column, sortOrder: order } : column
  );
};
