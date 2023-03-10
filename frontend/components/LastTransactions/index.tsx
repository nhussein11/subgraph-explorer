import React from 'react'
import { useQuery } from 'urql'
import { NameRegisteredQueryDocument } from '@/.graphclient'

export default function LastTranctions() {
  const [result] = useQuery({
    query: NameRegisteredQueryDocument,
  })

  const { data, error, fetching } = result

  if (fetching) return <div>loading</div>
  if (error) return <div>error</div>

  return <div>{JSON.stringify(data)}</div>
}
