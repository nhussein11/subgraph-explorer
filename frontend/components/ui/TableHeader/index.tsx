import { ColumnDefinitionType } from '../Table'

type TableHeaderProps<T, K extends keyof T> = {
  columns: Array<ColumnDefinitionType<T, K>>
}

const TableHeader = <T, K extends keyof T>({
  columns,
}: TableHeaderProps<T, K>) => {
  const headers = columns.map((column, index) => {
    const style = {
      width: column.width ?? 100,
    }

    return (
      <th
        key={`headCell-${index}`}
        style={style}
        className="border-double border-b-2  border-sky-500 text-xl underline underline-offset-4 pb-3"
      >
        {column.header}
      </th>
    )
  })

  return (
    <thead>
      <tr>{headers}</tr>
    </thead>
  )
}

export default TableHeader
