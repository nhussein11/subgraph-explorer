import Head from 'next/head'
import Container from '@/components/Container'

export default function Home() {
  return (
    <>
      <Head>
        <title>ENS Explorer</title>
      </Head>
      <Container title="ENS Explorer">
        <p>Home page</p>
      </Container>
    </>
  )
}
