import Head from 'next/head'
import Container from '@components/Container'

import { client, ssrCache } from '@utils/urqlClient'
import { TokensByUsersQueryDocument } from '@/.graphclient'
import TokensByUsers from '@components/TokensByUsers'

export default function Home() {
  return (
    <>
      <Head>
        <title> ENS Explorer </title>
        <meta name="description" content="ENS Explorer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container title="ENS Explorer">
        <TokensByUsers />
      </Container>
    </>
  )
}

export async function getServerSideProps() {
  console.log('executing server side props')
  await client.query(TokensByUsersQueryDocument, {}).toPromise()
  console.log('ssrCache', ssrCache)
  return {
    props: { urqlState: ssrCache.extractData() },
  }
}
