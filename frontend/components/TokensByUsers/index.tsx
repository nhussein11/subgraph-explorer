import React from 'react'
import { useQuery } from 'urql'
import { TokensByUsersQueryDocument } from '@/.graphclient'

import Table, { ColumnDefinitionType } from '@components/ui/Table'
import { TokenTable } from '@/global/types'

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
      width: 50,
    },
    {
      key: 'createdAtTimestamp',
      header: 'Created At.',
      width: 200,
    },
    {
      key: 'metadataURI',
      header: 'Metadata Description',
      width: 200,
    },
  ]

  const dataTable: TokenTable[] =
    data?.users.map(({ id, tokens }) => ({
      id,
      tokenId: tokens.slice(0, 10).map(({ tokenId }) => tokenId),
      contentURI: tokens.slice(0, 10).map(({ contentURI }) => contentURI),
      createdAtTimestamp: tokens
        .slice(0, 10)
        .map(({ createdAtTimestamp }) => parseTimestamp(+createdAtTimestamp)),
      metadataURI: tokens.slice(0, 10).map(({ metadataURI }) => metadataURI),
    })) ?? []

  return (
    <div className="container">
      <h2 className="text-2xl font-bold italic mb-5">Tokens by Users</h2>
      <Table data={dataTable || ([] as TokenTable[])} columns={columns} />
    </div>
  )
}
