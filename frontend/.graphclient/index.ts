// @ts-nocheck
import {
  GraphQLResolveInfo,
  SelectionSetNode,
  FieldNode,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import { gql } from '@graphql-mesh/utils'

import type { GetMeshOptions } from '@graphql-mesh/runtime'
import type { YamlConfig } from '@graphql-mesh/types'
import { PubSub } from '@graphql-mesh/utils'
import { DefaultLogger } from '@graphql-mesh/utils'
import MeshCache from '@graphql-mesh/cache-localforage'
import { fetch as fetchFn } from '@whatwg-node/fetch'

import { MeshResolvedSource } from '@graphql-mesh/runtime'
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types'
import GraphqlHandler from '@graphql-mesh/graphql'
import BareMerger from '@graphql-mesh/merger-bare'
import { printWithCache } from '@graphql-mesh/utils'
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http'
import {
  getMesh,
  ExecuteMeshFn,
  SubscribeMeshFn,
  MeshContext as BaseMeshContext,
  MeshInstance,
} from '@graphql-mesh/runtime'
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store'
import { path as pathModule } from '@graphql-mesh/cross-helpers'
import { ImportFn } from '@graphql-mesh/types'
import type { EthRegistrarControllerTypes } from './sources/ETHRegistrarController/types'
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
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>
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

export type NameRegistered = {
  id: Scalars['Bytes']
  name: Scalars['String']
  label: Scalars['Bytes']
  owner: Scalars['Bytes']
  cost: Scalars['BigInt']
  expires: Scalars['BigInt']
  blockNumber: Scalars['BigInt']
  blockTimestamp: Scalars['BigInt']
  transactionHash: Scalars['Bytes']
}

export type NameRegistered_filter = {
  id?: InputMaybe<Scalars['Bytes']>
  id_not?: InputMaybe<Scalars['Bytes']>
  id_gt?: InputMaybe<Scalars['Bytes']>
  id_lt?: InputMaybe<Scalars['Bytes']>
  id_gte?: InputMaybe<Scalars['Bytes']>
  id_lte?: InputMaybe<Scalars['Bytes']>
  id_in?: InputMaybe<Array<Scalars['Bytes']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  id_contains?: InputMaybe<Scalars['Bytes']>
  id_not_contains?: InputMaybe<Scalars['Bytes']>
  name?: InputMaybe<Scalars['String']>
  name_not?: InputMaybe<Scalars['String']>
  name_gt?: InputMaybe<Scalars['String']>
  name_lt?: InputMaybe<Scalars['String']>
  name_gte?: InputMaybe<Scalars['String']>
  name_lte?: InputMaybe<Scalars['String']>
  name_in?: InputMaybe<Array<Scalars['String']>>
  name_not_in?: InputMaybe<Array<Scalars['String']>>
  name_contains?: InputMaybe<Scalars['String']>
  name_contains_nocase?: InputMaybe<Scalars['String']>
  name_not_contains?: InputMaybe<Scalars['String']>
  name_not_contains_nocase?: InputMaybe<Scalars['String']>
  name_starts_with?: InputMaybe<Scalars['String']>
  name_starts_with_nocase?: InputMaybe<Scalars['String']>
  name_not_starts_with?: InputMaybe<Scalars['String']>
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  name_ends_with?: InputMaybe<Scalars['String']>
  name_ends_with_nocase?: InputMaybe<Scalars['String']>
  name_not_ends_with?: InputMaybe<Scalars['String']>
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  label?: InputMaybe<Scalars['Bytes']>
  label_not?: InputMaybe<Scalars['Bytes']>
  label_gt?: InputMaybe<Scalars['Bytes']>
  label_lt?: InputMaybe<Scalars['Bytes']>
  label_gte?: InputMaybe<Scalars['Bytes']>
  label_lte?: InputMaybe<Scalars['Bytes']>
  label_in?: InputMaybe<Array<Scalars['Bytes']>>
  label_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  label_contains?: InputMaybe<Scalars['Bytes']>
  label_not_contains?: InputMaybe<Scalars['Bytes']>
  owner?: InputMaybe<Scalars['Bytes']>
  owner_not?: InputMaybe<Scalars['Bytes']>
  owner_gt?: InputMaybe<Scalars['Bytes']>
  owner_lt?: InputMaybe<Scalars['Bytes']>
  owner_gte?: InputMaybe<Scalars['Bytes']>
  owner_lte?: InputMaybe<Scalars['Bytes']>
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  owner_contains?: InputMaybe<Scalars['Bytes']>
  owner_not_contains?: InputMaybe<Scalars['Bytes']>
  cost?: InputMaybe<Scalars['BigInt']>
  cost_not?: InputMaybe<Scalars['BigInt']>
  cost_gt?: InputMaybe<Scalars['BigInt']>
  cost_lt?: InputMaybe<Scalars['BigInt']>
  cost_gte?: InputMaybe<Scalars['BigInt']>
  cost_lte?: InputMaybe<Scalars['BigInt']>
  cost_in?: InputMaybe<Array<Scalars['BigInt']>>
  cost_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  expires?: InputMaybe<Scalars['BigInt']>
  expires_not?: InputMaybe<Scalars['BigInt']>
  expires_gt?: InputMaybe<Scalars['BigInt']>
  expires_lt?: InputMaybe<Scalars['BigInt']>
  expires_gte?: InputMaybe<Scalars['BigInt']>
  expires_lte?: InputMaybe<Scalars['BigInt']>
  expires_in?: InputMaybe<Array<Scalars['BigInt']>>
  expires_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  blockNumber?: InputMaybe<Scalars['BigInt']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  blockTimestamp?: InputMaybe<Scalars['BigInt']>
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  transactionHash?: InputMaybe<Scalars['Bytes']>
  transactionHash_not?: InputMaybe<Scalars['Bytes']>
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<NameRegistered_filter>>>
  or?: InputMaybe<Array<InputMaybe<NameRegistered_filter>>>
}

export type NameRegistered_orderBy =
  | 'id'
  | 'name'
  | 'label'
  | 'owner'
  | 'cost'
  | 'expires'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash'

export type NameRenewed = {
  id: Scalars['Bytes']
  name: Scalars['String']
  label: Scalars['Bytes']
  cost: Scalars['BigInt']
  expires: Scalars['BigInt']
  blockNumber: Scalars['BigInt']
  blockTimestamp: Scalars['BigInt']
  transactionHash: Scalars['Bytes']
}

export type NameRenewed_filter = {
  id?: InputMaybe<Scalars['Bytes']>
  id_not?: InputMaybe<Scalars['Bytes']>
  id_gt?: InputMaybe<Scalars['Bytes']>
  id_lt?: InputMaybe<Scalars['Bytes']>
  id_gte?: InputMaybe<Scalars['Bytes']>
  id_lte?: InputMaybe<Scalars['Bytes']>
  id_in?: InputMaybe<Array<Scalars['Bytes']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  id_contains?: InputMaybe<Scalars['Bytes']>
  id_not_contains?: InputMaybe<Scalars['Bytes']>
  name?: InputMaybe<Scalars['String']>
  name_not?: InputMaybe<Scalars['String']>
  name_gt?: InputMaybe<Scalars['String']>
  name_lt?: InputMaybe<Scalars['String']>
  name_gte?: InputMaybe<Scalars['String']>
  name_lte?: InputMaybe<Scalars['String']>
  name_in?: InputMaybe<Array<Scalars['String']>>
  name_not_in?: InputMaybe<Array<Scalars['String']>>
  name_contains?: InputMaybe<Scalars['String']>
  name_contains_nocase?: InputMaybe<Scalars['String']>
  name_not_contains?: InputMaybe<Scalars['String']>
  name_not_contains_nocase?: InputMaybe<Scalars['String']>
  name_starts_with?: InputMaybe<Scalars['String']>
  name_starts_with_nocase?: InputMaybe<Scalars['String']>
  name_not_starts_with?: InputMaybe<Scalars['String']>
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  name_ends_with?: InputMaybe<Scalars['String']>
  name_ends_with_nocase?: InputMaybe<Scalars['String']>
  name_not_ends_with?: InputMaybe<Scalars['String']>
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  label?: InputMaybe<Scalars['Bytes']>
  label_not?: InputMaybe<Scalars['Bytes']>
  label_gt?: InputMaybe<Scalars['Bytes']>
  label_lt?: InputMaybe<Scalars['Bytes']>
  label_gte?: InputMaybe<Scalars['Bytes']>
  label_lte?: InputMaybe<Scalars['Bytes']>
  label_in?: InputMaybe<Array<Scalars['Bytes']>>
  label_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  label_contains?: InputMaybe<Scalars['Bytes']>
  label_not_contains?: InputMaybe<Scalars['Bytes']>
  cost?: InputMaybe<Scalars['BigInt']>
  cost_not?: InputMaybe<Scalars['BigInt']>
  cost_gt?: InputMaybe<Scalars['BigInt']>
  cost_lt?: InputMaybe<Scalars['BigInt']>
  cost_gte?: InputMaybe<Scalars['BigInt']>
  cost_lte?: InputMaybe<Scalars['BigInt']>
  cost_in?: InputMaybe<Array<Scalars['BigInt']>>
  cost_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  expires?: InputMaybe<Scalars['BigInt']>
  expires_not?: InputMaybe<Scalars['BigInt']>
  expires_gt?: InputMaybe<Scalars['BigInt']>
  expires_lt?: InputMaybe<Scalars['BigInt']>
  expires_gte?: InputMaybe<Scalars['BigInt']>
  expires_lte?: InputMaybe<Scalars['BigInt']>
  expires_in?: InputMaybe<Array<Scalars['BigInt']>>
  expires_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  blockNumber?: InputMaybe<Scalars['BigInt']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  blockTimestamp?: InputMaybe<Scalars['BigInt']>
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  transactionHash?: InputMaybe<Scalars['Bytes']>
  transactionHash_not?: InputMaybe<Scalars['Bytes']>
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<NameRenewed_filter>>>
  or?: InputMaybe<Array<InputMaybe<NameRenewed_filter>>>
}

export type NameRenewed_orderBy =
  | 'id'
  | 'name'
  | 'label'
  | 'cost'
  | 'expires'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash'

export type NewPriceOracle = {
  id: Scalars['Bytes']
  oracle: Scalars['Bytes']
  blockNumber: Scalars['BigInt']
  blockTimestamp: Scalars['BigInt']
  transactionHash: Scalars['Bytes']
}

export type NewPriceOracle_filter = {
  id?: InputMaybe<Scalars['Bytes']>
  id_not?: InputMaybe<Scalars['Bytes']>
  id_gt?: InputMaybe<Scalars['Bytes']>
  id_lt?: InputMaybe<Scalars['Bytes']>
  id_gte?: InputMaybe<Scalars['Bytes']>
  id_lte?: InputMaybe<Scalars['Bytes']>
  id_in?: InputMaybe<Array<Scalars['Bytes']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  id_contains?: InputMaybe<Scalars['Bytes']>
  id_not_contains?: InputMaybe<Scalars['Bytes']>
  oracle?: InputMaybe<Scalars['Bytes']>
  oracle_not?: InputMaybe<Scalars['Bytes']>
  oracle_gt?: InputMaybe<Scalars['Bytes']>
  oracle_lt?: InputMaybe<Scalars['Bytes']>
  oracle_gte?: InputMaybe<Scalars['Bytes']>
  oracle_lte?: InputMaybe<Scalars['Bytes']>
  oracle_in?: InputMaybe<Array<Scalars['Bytes']>>
  oracle_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  oracle_contains?: InputMaybe<Scalars['Bytes']>
  oracle_not_contains?: InputMaybe<Scalars['Bytes']>
  blockNumber?: InputMaybe<Scalars['BigInt']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  blockTimestamp?: InputMaybe<Scalars['BigInt']>
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  transactionHash?: InputMaybe<Scalars['Bytes']>
  transactionHash_not?: InputMaybe<Scalars['Bytes']>
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<NewPriceOracle_filter>>>
  or?: InputMaybe<Array<InputMaybe<NewPriceOracle_filter>>>
}

export type NewPriceOracle_orderBy =
  | 'id'
  | 'oracle'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash'

/** Defines the order direction, either ascending or descending */
export type OrderDirection = 'asc' | 'desc'

export type OwnershipTransferred = {
  id: Scalars['Bytes']
  previousOwner: Scalars['Bytes']
  newOwner: Scalars['Bytes']
  blockNumber: Scalars['BigInt']
  blockTimestamp: Scalars['BigInt']
  transactionHash: Scalars['Bytes']
}

export type OwnershipTransferred_filter = {
  id?: InputMaybe<Scalars['Bytes']>
  id_not?: InputMaybe<Scalars['Bytes']>
  id_gt?: InputMaybe<Scalars['Bytes']>
  id_lt?: InputMaybe<Scalars['Bytes']>
  id_gte?: InputMaybe<Scalars['Bytes']>
  id_lte?: InputMaybe<Scalars['Bytes']>
  id_in?: InputMaybe<Array<Scalars['Bytes']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  id_contains?: InputMaybe<Scalars['Bytes']>
  id_not_contains?: InputMaybe<Scalars['Bytes']>
  previousOwner?: InputMaybe<Scalars['Bytes']>
  previousOwner_not?: InputMaybe<Scalars['Bytes']>
  previousOwner_gt?: InputMaybe<Scalars['Bytes']>
  previousOwner_lt?: InputMaybe<Scalars['Bytes']>
  previousOwner_gte?: InputMaybe<Scalars['Bytes']>
  previousOwner_lte?: InputMaybe<Scalars['Bytes']>
  previousOwner_in?: InputMaybe<Array<Scalars['Bytes']>>
  previousOwner_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  previousOwner_contains?: InputMaybe<Scalars['Bytes']>
  previousOwner_not_contains?: InputMaybe<Scalars['Bytes']>
  newOwner?: InputMaybe<Scalars['Bytes']>
  newOwner_not?: InputMaybe<Scalars['Bytes']>
  newOwner_gt?: InputMaybe<Scalars['Bytes']>
  newOwner_lt?: InputMaybe<Scalars['Bytes']>
  newOwner_gte?: InputMaybe<Scalars['Bytes']>
  newOwner_lte?: InputMaybe<Scalars['Bytes']>
  newOwner_in?: InputMaybe<Array<Scalars['Bytes']>>
  newOwner_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  newOwner_contains?: InputMaybe<Scalars['Bytes']>
  newOwner_not_contains?: InputMaybe<Scalars['Bytes']>
  blockNumber?: InputMaybe<Scalars['BigInt']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  blockTimestamp?: InputMaybe<Scalars['BigInt']>
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  transactionHash?: InputMaybe<Scalars['Bytes']>
  transactionHash_not?: InputMaybe<Scalars['Bytes']>
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<OwnershipTransferred_filter>>>
  or?: InputMaybe<Array<InputMaybe<OwnershipTransferred_filter>>>
}

export type OwnershipTransferred_orderBy =
  | 'id'
  | 'previousOwner'
  | 'newOwner'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash'

export type Query = {
  nameRegistered?: Maybe<NameRegistered>
  nameRegistereds: Array<NameRegistered>
  nameRenewed?: Maybe<NameRenewed>
  nameReneweds: Array<NameRenewed>
  newPriceOracle?: Maybe<NewPriceOracle>
  newPriceOracles: Array<NewPriceOracle>
  ownershipTransferred?: Maybe<OwnershipTransferred>
  ownershipTransferreds: Array<OwnershipTransferred>
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>
}

export type QuerynameRegisteredArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerynameRegisteredsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<NameRegistered_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<NameRegistered_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerynameRenewedArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerynameRenewedsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<NameRenewed_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<NameRenewed_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerynewPriceOracleArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerynewPriceOraclesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<NewPriceOracle_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<NewPriceOracle_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryownershipTransferredArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryownershipTransferredsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<OwnershipTransferred_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<OwnershipTransferred_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Query_metaArgs = {
  block?: InputMaybe<Block_height>
}

export type Subscription = {
  nameRegistered?: Maybe<NameRegistered>
  nameRegistereds: Array<NameRegistered>
  nameRenewed?: Maybe<NameRenewed>
  nameReneweds: Array<NameRenewed>
  newPriceOracle?: Maybe<NewPriceOracle>
  newPriceOracles: Array<NewPriceOracle>
  ownershipTransferred?: Maybe<OwnershipTransferred>
  ownershipTransferreds: Array<OwnershipTransferred>
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>
}

export type SubscriptionnameRegisteredArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionnameRegisteredsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<NameRegistered_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<NameRegistered_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionnameRenewedArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionnameRenewedsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<NameRenewed_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<NameRenewed_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionnewPriceOracleArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionnewPriceOraclesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<NewPriceOracle_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<NewPriceOracle_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionownershipTransferredArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionownershipTransferredsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<OwnershipTransferred_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<OwnershipTransferred_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>
}

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

export type WithIndex<TObject> = TObject & Record<string, any>
export type ResolversObject<TObject> = WithIndex<TObject>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode)
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>
  BlockChangedFilter: BlockChangedFilter
  Block_height: Block_height
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>
  Float: ResolverTypeWrapper<Scalars['Float']>
  ID: ResolverTypeWrapper<Scalars['ID']>
  Int: ResolverTypeWrapper<Scalars['Int']>
  NameRegistered: ResolverTypeWrapper<NameRegistered>
  NameRegistered_filter: NameRegistered_filter
  NameRegistered_orderBy: NameRegistered_orderBy
  NameRenewed: ResolverTypeWrapper<NameRenewed>
  NameRenewed_filter: NameRenewed_filter
  NameRenewed_orderBy: NameRenewed_orderBy
  NewPriceOracle: ResolverTypeWrapper<NewPriceOracle>
  NewPriceOracle_filter: NewPriceOracle_filter
  NewPriceOracle_orderBy: NewPriceOracle_orderBy
  OrderDirection: OrderDirection
  OwnershipTransferred: ResolverTypeWrapper<OwnershipTransferred>
  OwnershipTransferred_filter: OwnershipTransferred_filter
  OwnershipTransferred_orderBy: OwnershipTransferred_orderBy
  Query: ResolverTypeWrapper<{}>
  String: ResolverTypeWrapper<Scalars['String']>
  Subscription: ResolverTypeWrapper<{}>
  _Block_: ResolverTypeWrapper<_Block_>
  _Meta_: ResolverTypeWrapper<_Meta_>
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BigDecimal: Scalars['BigDecimal']
  BigInt: Scalars['BigInt']
  BlockChangedFilter: BlockChangedFilter
  Block_height: Block_height
  Boolean: Scalars['Boolean']
  Bytes: Scalars['Bytes']
  Float: Scalars['Float']
  ID: Scalars['ID']
  Int: Scalars['Int']
  NameRegistered: NameRegistered
  NameRegistered_filter: NameRegistered_filter
  NameRenewed: NameRenewed
  NameRenewed_filter: NameRenewed_filter
  NewPriceOracle: NewPriceOracle
  NewPriceOracle_filter: NewPriceOracle_filter
  OwnershipTransferred: OwnershipTransferred
  OwnershipTransferred_filter: OwnershipTransferred_filter
  Query: {}
  String: Scalars['String']
  Subscription: {}
  _Block_: _Block_
  _Meta_: _Meta_
}>

export type entityDirectiveArgs = {}

export type entityDirectiveResolver<
  Result,
  Parent,
  ContextType = MeshContext,
  Args = entityDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type subgraphIdDirectiveArgs = {
  id: Scalars['String']
}

export type subgraphIdDirectiveResolver<
  Result,
  Parent,
  ContextType = MeshContext,
  Args = subgraphIdDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type derivedFromDirectiveArgs = {
  field: Scalars['String']
}

export type derivedFromDirectiveResolver<
  Result,
  Parent,
  ContextType = MeshContext,
  Args = derivedFromDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export interface BigDecimalScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal'
}

export interface BigIntScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt'
}

export interface BytesScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes'
}

export type NameRegisteredResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['NameRegistered'] = ResolversParentTypes['NameRegistered']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  label?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  cost?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  expires?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type NameRenewedResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['NameRenewed'] = ResolversParentTypes['NameRenewed']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  label?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  cost?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  expires?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type NewPriceOracleResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['NewPriceOracle'] = ResolversParentTypes['NewPriceOracle']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  oracle?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type OwnershipTransferredResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['OwnershipTransferred'] = ResolversParentTypes['OwnershipTransferred']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  previousOwner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  newOwner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type QueryResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
  nameRegistered?: Resolver<
    Maybe<ResolversTypes['NameRegistered']>,
    ParentType,
    ContextType,
    RequireFields<QuerynameRegisteredArgs, 'id' | 'subgraphError'>
  >
  nameRegistereds?: Resolver<
    Array<ResolversTypes['NameRegistered']>,
    ParentType,
    ContextType,
    RequireFields<QuerynameRegisteredsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  nameRenewed?: Resolver<
    Maybe<ResolversTypes['NameRenewed']>,
    ParentType,
    ContextType,
    RequireFields<QuerynameRenewedArgs, 'id' | 'subgraphError'>
  >
  nameReneweds?: Resolver<
    Array<ResolversTypes['NameRenewed']>,
    ParentType,
    ContextType,
    RequireFields<QuerynameRenewedsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  newPriceOracle?: Resolver<
    Maybe<ResolversTypes['NewPriceOracle']>,
    ParentType,
    ContextType,
    RequireFields<QuerynewPriceOracleArgs, 'id' | 'subgraphError'>
  >
  newPriceOracles?: Resolver<
    Array<ResolversTypes['NewPriceOracle']>,
    ParentType,
    ContextType,
    RequireFields<QuerynewPriceOraclesArgs, 'skip' | 'first' | 'subgraphError'>
  >
  ownershipTransferred?: Resolver<
    Maybe<ResolversTypes['OwnershipTransferred']>,
    ParentType,
    ContextType,
    RequireFields<QueryownershipTransferredArgs, 'id' | 'subgraphError'>
  >
  ownershipTransferreds?: Resolver<
    Array<ResolversTypes['OwnershipTransferred']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryownershipTransferredsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  _meta?: Resolver<
    Maybe<ResolversTypes['_Meta_']>,
    ParentType,
    ContextType,
    Partial<Query_metaArgs>
  >
}>

export type SubscriptionResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']
> = ResolversObject<{
  nameRegistered?: SubscriptionResolver<
    Maybe<ResolversTypes['NameRegistered']>,
    'nameRegistered',
    ParentType,
    ContextType,
    RequireFields<SubscriptionnameRegisteredArgs, 'id' | 'subgraphError'>
  >
  nameRegistereds?: SubscriptionResolver<
    Array<ResolversTypes['NameRegistered']>,
    'nameRegistereds',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionnameRegisteredsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  nameRenewed?: SubscriptionResolver<
    Maybe<ResolversTypes['NameRenewed']>,
    'nameRenewed',
    ParentType,
    ContextType,
    RequireFields<SubscriptionnameRenewedArgs, 'id' | 'subgraphError'>
  >
  nameReneweds?: SubscriptionResolver<
    Array<ResolversTypes['NameRenewed']>,
    'nameReneweds',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionnameRenewedsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  newPriceOracle?: SubscriptionResolver<
    Maybe<ResolversTypes['NewPriceOracle']>,
    'newPriceOracle',
    ParentType,
    ContextType,
    RequireFields<SubscriptionnewPriceOracleArgs, 'id' | 'subgraphError'>
  >
  newPriceOracles?: SubscriptionResolver<
    Array<ResolversTypes['NewPriceOracle']>,
    'newPriceOracles',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionnewPriceOraclesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ownershipTransferred?: SubscriptionResolver<
    Maybe<ResolversTypes['OwnershipTransferred']>,
    'ownershipTransferred',
    ParentType,
    ContextType,
    RequireFields<SubscriptionownershipTransferredArgs, 'id' | 'subgraphError'>
  >
  ownershipTransferreds?: SubscriptionResolver<
    Array<ResolversTypes['OwnershipTransferred']>,
    'ownershipTransferreds',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionownershipTransferredsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  _meta?: SubscriptionResolver<
    Maybe<ResolversTypes['_Meta_']>,
    '_meta',
    ParentType,
    ContextType,
    Partial<Subscription_metaArgs>
  >
}>

export type _Block_Resolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']
> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type _Meta_Resolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']
> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  hasIndexingErrors?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  BigDecimal?: GraphQLScalarType
  BigInt?: GraphQLScalarType
  Bytes?: GraphQLScalarType
  NameRegistered?: NameRegisteredResolvers<ContextType>
  NameRenewed?: NameRenewedResolvers<ContextType>
  NewPriceOracle?: NewPriceOracleResolvers<ContextType>
  OwnershipTransferred?: OwnershipTransferredResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  Subscription?: SubscriptionResolvers<ContextType>
  _Block_?: _Block_Resolvers<ContextType>
  _Meta_?: _Meta_Resolvers<ContextType>
}>

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>
}>

export type MeshContext = EthRegistrarControllerTypes.Context & BaseMeshContext

import { fileURLToPath } from '@graphql-mesh/utils'
const baseDir = pathModule.join(
  pathModule.dirname(fileURLToPath(import.meta.url)),
  '..'
)

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (
    pathModule.isAbsolute(moduleId)
      ? pathModule.relative(baseDir, moduleId)
      : moduleId
  )
    .split('\\')
    .join('/')
    .replace(baseDir + '/', '')
  switch (relativeModuleId) {
    case '.graphclient/sources/ETHRegistrarController/introspectionSchema':
      return import('./sources/ETHRegistrarController/introspectionSchema') as T

    default:
      return Promise.reject(
        new Error(`Cannot find module '${relativeModuleId}'.`)
      )
  }
}

const rootStore = new MeshStore(
  '.graphclient',
  new FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
    fileType: 'ts',
  }),
  {
    readonly: true,
    validate: false,
  }
)

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
  const pubsub = new PubSub()
  const sourcesStore = rootStore.child('sources')
  const logger = new DefaultLogger('GraphClient')
  const cache = new (MeshCache as any)({
    ...({} as any),
    importFn,
    store: rootStore.child('cache'),
    pubsub,
    logger,
  } as any)

  const sources: MeshResolvedSource[] = []
  const transforms: MeshTransform[] = []
  const additionalEnvelopPlugins: MeshPlugin<any>[] = []
  const ethRegistrarControllerTransforms = []
  const additionalTypeDefs = [] as any[]
  const ethRegistrarControllerHandler = new GraphqlHandler({
    name: 'ETHRegistrarController',
    config: {
      endpoint:
        'https://api.studio.thegraph.com/query/43355/ens-explorer/0.0.1',
    },
    baseDir,
    cache,
    pubsub,
    store: sourcesStore.child('ETHRegistrarController'),
    logger: logger.child('ETHRegistrarController'),
    importFn,
  })
  sources[0] = {
    name: 'ETHRegistrarController',
    handler: ethRegistrarControllerHandler,
    transforms: ethRegistrarControllerTransforms,
  }
  const additionalResolvers = [] as any[]
  const merger = new (BareMerger as any)({
    cache,
    pubsub,
    logger: logger.child('bareMerger'),
    store: rootStore.child('bareMerger'),
  })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
        {
          document: NameRegisteredQueryDocument,
          get rawSDL() {
            return printWithCache(NameRegisteredQueryDocument)
          },
          location: 'NameRegisteredQueryDocument.graphql',
        },
      ]
    },
    fetchFn,
  }
}

export function createBuiltMeshHTTPHandler<
  TServerContext = {}
>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}

let meshInstance$: Promise<MeshInstance> | undefined

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions()
      .then((meshOptions) => getMesh(meshOptions))
      .then((mesh) => {
        const id = mesh.pubsub.subscribe('destroy', () => {
          meshInstance$ = undefined
          mesh.pubsub.unsubscribe(id)
        })
        return mesh
      })
  }
  return meshInstance$
}

export const execute: ExecuteMeshFn = (...args) =>
  getBuiltGraphClient().then(({ execute }) => execute(...args))

export const subscribe: SubscribeMeshFn = (...args) =>
  getBuiltGraphClient().then(({ subscribe }) => subscribe(...args))
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(
  globalContext?: TGlobalContext
) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) =>
    sdkRequesterFactory(globalContext)
  )
  return getSdk<TOperationContext, TGlobalContext>((...args) =>
    sdkRequester$.then((sdkRequester) => sdkRequester(...args))
  )
}
export type NameRegisteredQueryQueryVariables = Exact<{ [key: string]: never }>

export type NameRegisteredQueryQuery = {
  nameRegistereds: Array<
    Pick<
      NameRegistered,
      'id' | 'name' | 'label' | 'owner' | 'blockNumber' | 'cost'
    >
  >
}

export const NameRegisteredQueryDocument = gql`
  query NameRegisteredQuery {
    nameRegistereds(first: 20, orderBy: blockTimestamp, orderDirection: desc) {
      id
      name
      label
      owner
      blockNumber
      cost
    }
  }
` as unknown as DocumentNode<
  NameRegisteredQueryQuery,
  NameRegisteredQueryQueryVariables
>

export type Requester<C = {}, E = unknown> = <R, V>(
  doc: DocumentNode,
  vars?: V,
  options?: C
) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    NameRegisteredQuery(
      variables?: NameRegisteredQueryQueryVariables,
      options?: C
    ): Promise<NameRegisteredQueryQuery> {
      return requester<
        NameRegisteredQueryQuery,
        NameRegisteredQueryQueryVariables
      >(
        NameRegisteredQueryDocument,
        variables,
        options
      ) as Promise<NameRegisteredQueryQuery>
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
