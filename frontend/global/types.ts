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

export type TokenTable = Pick<TokensByUsers, 'id'> &
  Record<keyof Token, Array<Token[keyof Token]>>
