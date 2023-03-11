import React from 'react';
import countries from '../../countries';
import { Table } from '../shared/Table/Table';
import { useSortableColumns } from '../shared/Table/utils/useSortableColumns';
import { useSortableData } from '../shared/Table/utils/useSortableData';

export const CountriesTable: React.FC = () => {
  const { sortedRows, sortedColumn, handleSorting } =
    useSortableData(countries);

  const columns = useSortableColumns({ columns: countryColumns, sortedColumn });

  return (
    <Table
      columns={columns}
      rows={sortedRows.map((row) => Object.values(row))}
      handleSorting={handleSorting}
    />
  );
};

const countryColumns = [
  {
    id: 'confirmed',
    label: 'Confirmed',
  },
  {
    id: 'recovered',
    label: 'Recovered',
  },
  {
    id: 'deaths',
    label: 'Deaths',
  },
  {
    id: 'country',
    label: 'Country',
  },
  {
    id: 'population',
    label: 'Population',
  },
  {
    id: 'areaInSqKm',
    label: 'Area in Sq. Km',
  },
  {
    id: 'lifeExpectancy',
    label: 'Life expectancy',
  },
  {
    id: 'elevationMeters',
    label: 'Elevation meters',
  },
  {
    id: 'continent',
    label: 'Continent',
  },
  {
    id: 'abbreviation',
    label: 'Abbreviation',
  },
  {
    id: 'location',
    label: 'Location',
  },
  {
    id: 'capitalCity',
    label: 'Capital city',
  },
  {
    id: 'lat',
    label: 'Lat',
  },
  {
    id: 'lng',
    label: 'Lng',
  },
];
