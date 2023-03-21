import React from 'react'
import { useQuery } from 'urql'
import { TokensByUsersQueryDocument } from '@/.graphclient'

import Table, { ColumnDefinitionType } from '@components/ui/Table'
import { TokensByUsers as TokensByUsersType, TokenTable } from '@/global/types'

export default function TokensByUsers() {
  const [result] = useQuery({
    query: TokensByUsersQueryDocument,
  })

  const { data, error, fetching } = result

  if (fetching) return <div>loading</div>
  if (error) return <div>error</div>

  const columns: ColumnDefinitionType<TokenTable, keyof TokenTable>[] = [
    {
      key: 'id',
      header: 'User',
    },
    {
      key: 'tokenId',
      header: 'Token Id/s',
    },
    // {
    //   key: 'contentURI',
    //   header: 'Content URI/s',
    // },
  ]

  const dataTable = data?.users.map((user: TokensByUsersType) => {
    return {
      id: user.id,
      tokenId: user.tokens.map((token) => token.tokenId).slice(0, 10),
      contentURI: user.tokens.map((token) => token.contentURI).slice(0, 10),
    }
  }) as Array<TokenTable>

  return (
    <div className="container mx-8">
      <h2 className="text-2xl font-bold italic mb-5">Tokens by Users</h2>
      <Table data={dataTable || ([] as TokenTable[])} columns={columns} />
    </div>
  )
}
