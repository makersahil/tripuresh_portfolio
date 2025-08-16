import React from 'react';

export interface Column<T> {
  /** Property of the data row to display in this column */
  key: keyof T | 'actions';
  /** Header text for the column */
  header: React.ReactNode;
  /** Optional custom render function for the column */
  render?: (value: any, row: T) => React.ReactNode;
}

export interface TableProps<T> {
  /** Array of column definitions */
  columns: Column<T>[];
  /** Array of data rows to display */
  data: T[];
}

/**
 * A basic table component that renders column headers and rows. Cells are
 * rendered using either the raw value of the row at the column key or an
 * optional custom render function provided per column.
 */
function Table<T>({ columns, data }: TableProps<T>): React.ReactElement {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                scope="col"
                className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col) => (
                <td
                  key={String(col.key)}
                  className="px-3 py-2 whitespace-nowrap text-sm text-gray-900"
                >
                  {col.render ? col.render((row as any)[col.key], row) : (row as any)[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
