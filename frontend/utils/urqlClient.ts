import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  ssrExchange,
} from 'urql'

const isServer = typeof window === 'undefined'
const ssrCache = ssrExchange({ isClient: !isServer })

const client = createClient({
  url: 'https://api.studio.thegraph.com/query/43355/ens-explorer/0.0.1',
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
})

export { client, ssrCache }
