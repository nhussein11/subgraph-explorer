// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types'
import { MeshContext } from '@graphql-mesh/runtime'

export namespace TokenSubgraphTypes {
  export type Maybe<T> = T | null
  export type InputMaybe<T> = Maybe<T>
  export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K]
  }
  export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>
  }
  export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>
  }
  /** All built-in and custom scalars, mapped to their actual values */
  export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
    BigDecimal: any
    BigInt: any
    Bytes: any
  }

  export type BlockChangedFilter = {
    number_gte: Scalars['Int']
  }

  export type Block_height = {
    hash?: InputMaybe<Scalars['Bytes']>
    number?: InputMaybe<Scalars['Int']>
    number_gte?: InputMaybe<Scalars['Int']>
  }

  /** Defines the order direction, either ascending or descending */
  export type OrderDirection = 'asc' | 'desc'

  export type Query = {
    token?: Maybe<Token>
    tokens: Array<Token>
    user?: Maybe<User>
    users: Array<User>
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>
  }

  export type QuerytokenArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerytokensArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Token_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Token_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryuserArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryusersArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<User_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<User_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type Query_metaArgs = {
    block?: InputMaybe<Block_height>
  }

  export type Subscription = {
    token?: Maybe<Token>
    tokens: Array<Token>
    user?: Maybe<User>
    users: Array<User>
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>
  }

  export type SubscriptiontokenArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptiontokensArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Token_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Token_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionuserArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionusersArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<User_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<User_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type Subscription_metaArgs = {
    block?: InputMaybe<Block_height>
  }

  export type Token = {
    id: Scalars['ID']
    tokenId: Scalars['BigInt']
    contentURI: Scalars['String']
    metadataURI: Scalars['String']
    createdAtTimestamp: Scalars['BigInt']
    creator: User
    owner: User
  }

  export type Token_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    tokenId?: InputMaybe<Scalars['BigInt']>
    tokenId_not?: InputMaybe<Scalars['BigInt']>
    tokenId_gt?: InputMaybe<Scalars['BigInt']>
    tokenId_lt?: InputMaybe<Scalars['BigInt']>
    tokenId_gte?: InputMaybe<Scalars['BigInt']>
    tokenId_lte?: InputMaybe<Scalars['BigInt']>
    tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>
    tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    contentURI?: InputMaybe<Scalars['String']>
    contentURI_not?: InputMaybe<Scalars['String']>
    contentURI_gt?: InputMaybe<Scalars['String']>
    contentURI_lt?: InputMaybe<Scalars['String']>
    contentURI_gte?: InputMaybe<Scalars['String']>
    contentURI_lte?: InputMaybe<Scalars['String']>
    contentURI_in?: InputMaybe<Array<Scalars['String']>>
    contentURI_not_in?: InputMaybe<Array<Scalars['String']>>
    contentURI_contains?: InputMaybe<Scalars['String']>
    contentURI_contains_nocase?: InputMaybe<Scalars['String']>
    contentURI_not_contains?: InputMaybe<Scalars['String']>
    contentURI_not_contains_nocase?: InputMaybe<Scalars['String']>
    contentURI_starts_with?: InputMaybe<Scalars['String']>
    contentURI_starts_with_nocase?: InputMaybe<Scalars['String']>
    contentURI_not_starts_with?: InputMaybe<Scalars['String']>
    contentURI_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    contentURI_ends_with?: InputMaybe<Scalars['String']>
    contentURI_ends_with_nocase?: InputMaybe<Scalars['String']>
    contentURI_not_ends_with?: InputMaybe<Scalars['String']>
    contentURI_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    metadataURI?: InputMaybe<Scalars['String']>
    metadataURI_not?: InputMaybe<Scalars['String']>
    metadataURI_gt?: InputMaybe<Scalars['String']>
    metadataURI_lt?: InputMaybe<Scalars['String']>
    metadataURI_gte?: InputMaybe<Scalars['String']>
    metadataURI_lte?: InputMaybe<Scalars['String']>
    metadataURI_in?: InputMaybe<Array<Scalars['String']>>
    metadataURI_not_in?: InputMaybe<Array<Scalars['String']>>
    metadataURI_contains?: InputMaybe<Scalars['String']>
    metadataURI_contains_nocase?: InputMaybe<Scalars['String']>
    metadataURI_not_contains?: InputMaybe<Scalars['String']>
    metadataURI_not_contains_nocase?: InputMaybe<Scalars['String']>
    metadataURI_starts_with?: InputMaybe<Scalars['String']>
    metadataURI_starts_with_nocase?: InputMaybe<Scalars['String']>
    metadataURI_not_starts_with?: InputMaybe<Scalars['String']>
    metadataURI_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    metadataURI_ends_with?: InputMaybe<Scalars['String']>
    metadataURI_ends_with_nocase?: InputMaybe<Scalars['String']>
    metadataURI_not_ends_with?: InputMaybe<Scalars['String']>
    metadataURI_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    createdAtTimestamp?: InputMaybe<Scalars['BigInt']>
    createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>
    createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>
    createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>
    createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>
    createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>
    createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
    createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    creator?: InputMaybe<Scalars['String']>
    creator_not?: InputMaybe<Scalars['String']>
    creator_gt?: InputMaybe<Scalars['String']>
    creator_lt?: InputMaybe<Scalars['String']>
    creator_gte?: InputMaybe<Scalars['String']>
    creator_lte?: InputMaybe<Scalars['String']>
    creator_in?: InputMaybe<Array<Scalars['String']>>
    creator_not_in?: InputMaybe<Array<Scalars['String']>>
    creator_contains?: InputMaybe<Scalars['String']>
    creator_contains_nocase?: InputMaybe<Scalars['String']>
    creator_not_contains?: InputMaybe<Scalars['String']>
    creator_not_contains_nocase?: InputMaybe<Scalars['String']>
    creator_starts_with?: InputMaybe<Scalars['String']>
    creator_starts_with_nocase?: InputMaybe<Scalars['String']>
    creator_not_starts_with?: InputMaybe<Scalars['String']>
    creator_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    creator_ends_with?: InputMaybe<Scalars['String']>
    creator_ends_with_nocase?: InputMaybe<Scalars['String']>
    creator_not_ends_with?: InputMaybe<Scalars['String']>
    creator_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    creator_?: InputMaybe<User_filter>
    owner?: InputMaybe<Scalars['String']>
    owner_not?: InputMaybe<Scalars['String']>
    owner_gt?: InputMaybe<Scalars['String']>
    owner_lt?: InputMaybe<Scalars['String']>
    owner_gte?: InputMaybe<Scalars['String']>
    owner_lte?: InputMaybe<Scalars['String']>
    owner_in?: InputMaybe<Array<Scalars['String']>>
    owner_not_in?: InputMaybe<Array<Scalars['String']>>
    owner_contains?: InputMaybe<Scalars['String']>
    owner_contains_nocase?: InputMaybe<Scalars['String']>
    owner_not_contains?: InputMaybe<Scalars['String']>
    owner_not_contains_nocase?: InputMaybe<Scalars['String']>
    owner_starts_with?: InputMaybe<Scalars['String']>
    owner_starts_with_nocase?: InputMaybe<Scalars['String']>
    owner_not_starts_with?: InputMaybe<Scalars['String']>
    owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    owner_ends_with?: InputMaybe<Scalars['String']>
    owner_ends_with_nocase?: InputMaybe<Scalars['String']>
    owner_not_ends_with?: InputMaybe<Scalars['String']>
    owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    owner_?: InputMaybe<User_filter>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
    and?: InputMaybe<Array<InputMaybe<Token_filter>>>
    or?: InputMaybe<Array<InputMaybe<Token_filter>>>
  }

  export type Token_orderBy =
    | 'id'
    | 'tokenId'
    | 'contentURI'
    | 'metadataURI'
    | 'createdAtTimestamp'
    | 'creator'
    | 'creator__id'
    | 'owner'
    | 'owner__id'

  export type User = {
    id: Scalars['ID']
    tokens: Array<Token>
    created: Array<Token>
  }

  export type UsertokensArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Token_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Token_filter>
  }

  export type UsercreatedArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Token_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Token_filter>
  }

  export type User_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    tokens_?: InputMaybe<Token_filter>
    created_?: InputMaybe<Token_filter>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
    and?: InputMaybe<Array<InputMaybe<User_filter>>>
    or?: InputMaybe<Array<InputMaybe<User_filter>>>
  }

  export type User_orderBy = 'id' | 'tokens' | 'created'

  export type _Block_ = {
    /** The hash of the block */
    hash?: Maybe<Scalars['Bytes']>
    /** The block number */
    number: Scalars['Int']
    /** Integer representation of the timestamp stored in blocks for the chain */
    timestamp?: Maybe<Scalars['Int']>
  }

  /** The type for the top-level _meta field */
  export type _Meta_ = {
    /**
     * Information about a specific subgraph block. The hash of the block
     * will be null if the _meta field has a block constraint that asks for
     * a block number. It will be filled if the _meta field has no block constraint
     * and therefore asks for the latest  block
     *
     */
    block: _Block_
    /** The deployment ID */
    deployment: Scalars['String']
    /** If `true`, the subgraph encountered indexing errors at some past block */
    hasIndexingErrors: Scalars['Boolean']
  }

  export type _SubgraphErrorPolicy_ =
    /** Data will be returned even if the subgraph has indexing errors */
    | 'allow'
    /** If the subgraph has indexing errors, data will be omitted. The default. */
    | 'deny'

  export type QuerySdk = {
    /** null **/
    token: InContextSdkMethod<Query['token'], QuerytokenArgs, MeshContext>
    /** null **/
    tokens: InContextSdkMethod<Query['tokens'], QuerytokensArgs, MeshContext>
    /** null **/
    user: InContextSdkMethod<Query['user'], QueryuserArgs, MeshContext>
    /** null **/
    users: InContextSdkMethod<Query['users'], QueryusersArgs, MeshContext>
    /** Access to subgraph metadata **/
    _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  }

  export type MutationSdk = {}

  export type SubscriptionSdk = {
    /** null **/
    token: InContextSdkMethod<
      Subscription['token'],
      SubscriptiontokenArgs,
      MeshContext
    >
    /** null **/
    tokens: InContextSdkMethod<
      Subscription['tokens'],
      SubscriptiontokensArgs,
      MeshContext
    >
    /** null **/
    user: InContextSdkMethod<
      Subscription['user'],
      SubscriptionuserArgs,
      MeshContext
    >
    /** null **/
    users: InContextSdkMethod<
      Subscription['users'],
      SubscriptionusersArgs,
      MeshContext
    >
    /** Access to subgraph metadata **/
    _meta: InContextSdkMethod<
      Subscription['_meta'],
      Subscription_metaArgs,
      MeshContext
    >
  }

  export type Context = {
    ['TokenSubgraph']: {
      Query: QuerySdk
      Mutation: MutationSdk
      Subscription: SubscriptionSdk
    }
  }
}
