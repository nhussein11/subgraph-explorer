import React, { ReactNode } from 'react'
import { ColumnDefinitionType } from '../Table'

type TableRowsProps<T, K extends keyof T> = {
  data: Array<T>
  columns: Array<ColumnDefinitionType<T, K>>
}

const TableRows = <T, K extends keyof T>({
  data,
  columns,
}: TableRowsProps<T, K>) => {
  const rows = data.map((row, index) => {
    return (
      <tr
        key={`row-${index}`}
        className="border-b-2 border-slate-700 hover:bg-gray-600"
      >
        {columns.map((column, index2) => {
          return (
            <td key={`cell-${index2}`} className="text-center text-md pt-2">
              {Array.isArray(row[column.key]) &&
              (row[column.key] as Array<keyof K>).length > 10 ? (
                <div className="flex flex-col">
                  <div className="flex flex-row">
                    {(row[column.key] as Array<keyof K>)
                      .slice(0, 10)
                      .map((item, index) => {
                        console.log('item', item)
                        return (
                          <div
                            key={`item-${index}`}
                            className="text-center text-md pt-2"
                          >
                            {item as ReactNode} <br />
                          </div>
                        )
                      })}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col">
                  <div className="flex flex-row">
                    {row[column.key] as ReactNode} ,,,, <br />
                  </div>
                </div>
              )}
            </td>
          )
        })}
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

export default TableRows
