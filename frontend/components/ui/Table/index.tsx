import React from 'react'
import TableHeader from '../TableHeader'
import TableRows from '../TableRows'

export type ColumnDefinitionType<T, K extends keyof T> = {
  key: K
  header: string
  width?: number
}

export type TableProps<T, K extends keyof T> = {
  data: Array<T>
  columns: Array<ColumnDefinitionType<T, K>>
}

const Table = <T, K extends keyof T>({ data, columns }: TableProps<T, K>) => (
  <div className="container mx-8 flex justify-center align-center">
    <table className="table-auto border-collpase mx-8 mb-6 pb-2">
      <TableHeader columns={columns} />
      <TableRows data={data} columns={columns} />
    </table>
  </div>
)

export default Table
