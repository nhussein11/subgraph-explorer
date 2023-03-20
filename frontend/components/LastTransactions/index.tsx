import React from 'react'
import { useQuery } from 'urql'
import { TokensByUsersQueryDocument } from '@/.graphclient'

import Table, { ColumnDefinitionType } from '@components/ui/Table'
import { TokensByUsers } from '@/global/types'

export default function LastTransactions() {
  const [result] = useQuery({
    query: TokensByUsersQueryDocument,
  })

  const { error, fetching } = result

  if (fetching) return <div>loading</div>
  if (error) return <div>error</div>

  const columns: ColumnDefinitionType<TokensByUsers, keyof TokensByUsers>[] = [
    {
      key: 'id',
      header: 'User',
    },
    {
      key: 'tokens',
      header: 'Token Id',
    },
    {
      key: 'tokens',
      header: 'Content URI',
    },
  ]
  const dataTable = [] as TokensByUsers[]
  // TODO:  use something like this instead:
  // const dataTable = data?.users

  return (
    <div className="container mx-8">
      <h2 className="text-2xl font-bold italic mb-5">Last Transactions</h2>
      <Table data={dataTable} columns={columns} />
    </div>
  )
}
