import Head from 'next/head'
import Container from '@components/Container'

import { client, ssrCache } from '@utils/urqlClient'
import { TokensByUsersQueryDocument } from '@/.graphclient'
import TokensByUsers from '@components/TokensByUsers'

export default function Home() {
  return (
    <>
      <Head>
        <title> Subgraph Explorer </title>
        <meta name="description" content="ENS Explorer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container title="Subgraph Explorer">
        <TokensByUsers />
      </Container>
    </>
  )
}

export async function getServerSideProps() {
  await client.query(TokensByUsersQueryDocument, {}).toPromise()
  return {
    props: { urqlState: ssrCache.extractData() },
  }
}
