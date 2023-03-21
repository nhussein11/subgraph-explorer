import React from 'react'
import { useQuery } from 'urql'
import { TokensByUsersQueryDocument } from '@/.graphclient'

import Table, { ColumnDefinitionType } from '@components/ui/Table'
import { TokensByUsers as TokensByUsersType, TokenTable } from '@/global/types'

const parseTimestamp = (timestamp: number) => {
  return new Date(timestamp * 1000).toLocaleString().split(',')[0]
}

export default function TokensByUsers() {
  const [result] = useQuery({
    query: TokensByUsersQueryDocument,
  })

  const { data, error, fetching } = result

  if (fetching) return <div>Loading...</div>
  if (error) return <div>Error...</div>

  const columns: ColumnDefinitionType<TokenTable, keyof TokenTable>[] = [
    {
      key: 'id',
      header: 'User Address',
      width: 50,
    },
    {
      key: 'tokenId',
      header: 'Token Id/s',
    },
    {
      key: 'createdAtTimestamp',
      header: 'Created At.',
      width: 300,
    },
    {
      key: 'metadataURI',
      header: 'Metadata Description',
      width: 300,
    },
  ]

  const dataTable = data?.users.map((user: TokensByUsersType) => {
    return {
      id: user.id,
      tokenId: user.tokens.map((token) => token.tokenId).slice(0, 10),
      contentURI: user.tokens.map((token) => token.contentURI).slice(0, 10),
      createdAtTimestamp: user.tokens
        .map((token) => parseTimestamp(+token.createdAtTimestamp))
        .slice(0, 10),
      metadataURI: user.tokens.map((token) => token.metadataURI).slice(0, 10),
    }
  }) as TokenTable[]

  // TODO: add const tableRowsChildren -> to determine from this component HOW to render the table rows

  return (
    <div className="container mx-8 ">
      <h2 className="text-2xl font-bold italic mb-5">Tokens by Users</h2>
      <Table data={dataTable || ([] as TokenTable[])} columns={columns} />
    </div>
  )
}
