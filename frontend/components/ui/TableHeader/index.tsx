import { ColumnDefinitionType } from '../Table'

type TableHeaderProps<T, K extends keyof T> = {
  columns: Array<ColumnDefinitionType<T, K>>
}

const TableHeader = <T, K extends keyof T>({
  columns,
}: TableHeaderProps<T, K>) => {
  const headers = columns.map((column, index) => {
    const style = {
      // In my case, I decided to use 100 as a default width
      width: column.width ?? 100,
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
