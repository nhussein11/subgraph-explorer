import React from 'react'
import { useQuery } from 'urql'
import { NameRegisteredQueryDocument } from '@/.graphclient'

import Table, { ColumnDefinitionType } from '@components/ui/Table'
import { NameRegisteredTable } from '@/global/types'

export default function LastTranctions() {
  const [result] = useQuery({
    query: NameRegisteredQueryDocument,
  })

  const { data, error, fetching } = result

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

  const dataTable = data?.nameRegistereds as NameRegisteredTable[]

  return <Table data={dataTable} columns={columns} />
}
