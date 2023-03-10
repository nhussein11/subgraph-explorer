import Head from 'next/head'
import Container from '@components/Container'

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
        <p>Home page</p>
      </Container>
    </>
  )
}
