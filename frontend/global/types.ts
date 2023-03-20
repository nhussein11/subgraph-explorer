export interface NameRegistered {
  blockNumber: string
  cost: string
  id: string
  label: string
  name: string
  owner: string
}

export type NameRegisteredTable = Pick<
  NameRegistered,
  'label' | 'name' | 'owner'
>

export interface TokensByUsers {
  id: string
  tokens: Token[]
}

export interface Token {
  tokenId: string
  contentURI: string
  metadataURI: string
  createdAtTimestamp: string
}
