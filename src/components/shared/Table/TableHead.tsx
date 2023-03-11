import { OrderType, SortedColumnOptions } from './utils/useSortableColumns';

export type TableColumn = {
  id: string;
  label: string;
  sortOrder?: OrderType;
};

export interface TableHeaderProps {
  columns: TableColumn[];
  handleSorting: ({ columnId, order }: SortedColumnOptions) => void;
}

export const TableHead: React.FC<TableHeaderProps> = ({
  columns,
  handleSorting,
}) => {
  const handleSortingChange = (columnId: string, order: OrderType) => {
    handleSorting({
      columnId,
      order: (() => {
        if (!order) {
          return 'asc';
        }

        return order === 'asc' ? 'desc' : undefined;
      })(),
    });
  };

  return (
    <thead>
      <tr>
        {columns.map(({ id, label, sortOrder }) => (
          <th key={id} onClick={() => handleSortingChange(id, sortOrder)}>
            {label}
            <TableSortIcon order={sortOrder} />
          </th>
        ))}
      </tr>
    </thead>
  );
};

const TableSortIcon: React.FC<{ order: OrderType }> = ({ order }) => {
  const icon = (() => {
    switch (order) {
      case 'asc':
        return '▲';
      case 'desc':
        return '▼';
      default:
        return null;
    }
  })();

  return icon && <>{icon}</>;
};

export default TableHead;
