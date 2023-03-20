import React from 'react'
import { useQuery } from 'urql'
import { TokensByUsersQueryDocument } from '@/.graphclient'

import Table, { ColumnDefinitionType } from '@components/ui/Table'
import { TokensByUsers as TokensByUsersType } from '@/global/types'

export default function TokensByUsers() {
  const [result] = useQuery({
    query: TokensByUsersQueryDocument,
  })

  const { data, error, fetching } = result

  if (fetching) return <div>loading</div>
  if (error) return <div>error</div>

  const columns: ColumnDefinitionType<
    TokensByUsersType,
    keyof TokensByUsersType
  >[] = [
    {
      key: 'id',
      header: 'User',
    },
    // {
    //   key: 'tokens',
    //   header: 'Token Id',
    // },
    // {
    //   key: 'tokens',
    //   header: 'Content URI',
    // },
  ]
  console.log('data users', data?.users)
  const dataTable = data?.users as TokensByUsersType[]
  // const dataTable = data?.users as TokensByUsersType[]
  // TODO:  use something like this instead:
  // const dataTable = data?.users

  return (
    <div className="container mx-8">
      <h2 className="text-2xl font-bold italic mb-5">Tokens by Users</h2>
      <Table data={dataTable} columns={columns} />
    </div>
  )
}
