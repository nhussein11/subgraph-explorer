import React, { ReactNode } from 'react'
import { useSettingsContext } from '@/context'
import { ColumnDefinitionType } from '../Table'

type TableRowsProps<T, K extends keyof T> = {
  data: Array<T>
  columns: Array<ColumnDefinitionType<T, K>>
}

const TableRows = <T, K extends keyof T>({
  data,
  columns,
}: TableRowsProps<T, K>) => {
  const {
    settings: { theme },
  } = useSettingsContext()

  const renderedRows = data.map((row, rowIndex) => {
    const rowClass = `border-double border-b-2 border-sky-500 ${
      theme !== 'dark' ? 'hover:bg-slate-300' : 'hover:bg-gray-600'
    }`

    return (
      <tr key={`row-${rowIndex}`} className={rowClass}>
        {columns.map((column, columnIndex) => {
          const value = row[column.key]

          if (Array.isArray(value) && Array.from(value).some((item) => item)) {
            return (
              <td
                key={`cell-${columnIndex}`}
                className="text-center text-md w-3/6 pt-2"
              >
                {Array.from(value).map((item, itemIndex) => (
                  <div
                    key={`item-${itemIndex}`}
                    className="text-center text-md px-4 py-2 truncate"
                  >
                    {item as ReactNode}
                  </div>
                ))}
              </td>
            )
          }
          return (
            <td
              key={`cell-${columnIndex}`}
              className="text-center text-md pt-2"
            >
              <div className="text-center text-md pt-2 truncate">
                {typeof value === 'string' ? (value as ReactNode) : ' - '}
              </div>
            </td>
          )
        })}
      </tr>
    )
  })

  return <tbody>{renderedRows}</tbody>
}

export default TableRows
