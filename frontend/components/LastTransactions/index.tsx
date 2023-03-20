import React from 'react'
import { useQuery } from 'urql'
import { TokensByUsersQueryDocument } from '@/.graphclient'

import Table, { ColumnDefinitionType } from '@components/ui/Table'
import { NameRegisteredTable } from '@/global/types'

export default function LastTransactions() {
  const [result] = useQuery({
    query: TokensByUsersQueryDocument,
  })

  const { error, fetching } = result

  if (fetching) return <div>loading</div>
  if (error) return <div>error</div>

  const columns: ColumnDefinitionType<
    NameRegisteredTable,
    keyof NameRegisteredTable
  >[] = [
    {
      key: 'name',
      header: 'Name Registered',
    },
    {
      key: 'owner',
      header: 'Owner Address',
    },
    {
      key: 'label',
      header: 'Label',
    },
  ]
  const dataTable = [] as NameRegisteredTable[]
  // TODO:  use something like this:
  // const dataTable = data?.users

  return (
    <div className="container mx-8">
      <h2 className="text-2xl font-bold italic mb-5">Last Transactions</h2>
      <Table data={dataTable} columns={columns} />
    </div>
  )
}
