import React from 'react'
import { useQuery } from 'urql'
import { NameRegisteredQueryDocument } from '@/.graphclient'
import { NameRegistered } from '@/global/types'

export default function LastTranctions() {
  const [result] = useQuery({
    query: NameRegisteredQueryDocument,
  })

  const { data, error, fetching } = result

  if (fetching) return <div>loading</div>
  if (error) return <div>error</div>

  return (
    <table>
      <thead>
        <tr>
          {' '}
          <th>Name</th> <th>Owner</th> <th>Label</th>{' '}
        </tr>
      </thead>
      <tbody>
        {data?.nameRegistereds.map((contract: NameRegistered) => {
          return (
            <tr key={contract.id}>
              <td>{contract.name}</td>
              <td>{contract.owner}</td>
              <td>{contract.label}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
