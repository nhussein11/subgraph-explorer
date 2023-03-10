import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createClient, Provider } from 'urql'
import { graphExchange } from '@graphprotocol/client-urql'
import * as GraphClient from '../.graphclient'

const client = createClient({
  url: 'http://localhost:4000/graphql',
  exchanges: [graphExchange(GraphClient)],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  )
}
