// import { useSettingsContext } from '@/context'
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
    // TODO: Probably, to do somehting like this I'll need to use some management state tool
    // const {
    //   settings: { theme },
    // } = useSettingsContext()
    // TODO: hardcoded value to remember to change it
    const theme = 'dark'

    return (
      <tr
        key={`row-${index}`}
        className={` border-double border-b-2 border-sky-500 ${
          theme !== 'dark' ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
        }`}
      >
        {columns.map((column, index2) => {
          if (
            Array.isArray(row[column.key]) &&
            (row[column.key] as Array<keyof T>).length > 0
          ) {
            if ((row[column.key] as Array<keyof T>).length > 0) {
              return (
                <td key={`cell-${index2}`} className="text-center text-md pt-2">
                  {(row[column.key] as Array<keyof T>).map((item, index) => {
                    return (
                      <div
                        key={`item-${index}`}
                        className="text-center text-md px-4 py-2 truncate"
                      >
                        {item as ReactNode}
                      </div>
                    )
                  })}
                </td>
              )
            }
          }
          return (
            <td key={`cell-${index2}`} className="text-center text-md pt-2">
              <div className="text-center text-md pt-2 truncate">
                {typeof row[column.key] === 'string'
                  ? (row[column.key] as ReactNode)
                  : ' - '}
              </div>
            </td>
          )
        })}
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

export default TableRows
