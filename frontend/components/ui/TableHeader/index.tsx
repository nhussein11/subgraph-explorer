import { ColumnDefinitionType } from '../Table'

type TableHeaderProps<T, K extends keyof T> = {
  columns: Array<ColumnDefinitionType<T, K>>
}

const TableHeader = <T, K extends keyof T>({
  columns,
}: TableHeaderProps<T, K>): JSX.Element => {
  const headers = columns.map((column, index) => {
    const style = {
      width: column.width ?? 100, // 100 is our default value if width is not defined
    }

    return (
      <th
        key={`headCell-${index}`}
        style={style}
        className="text-xl underline underline-offset-4"
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
