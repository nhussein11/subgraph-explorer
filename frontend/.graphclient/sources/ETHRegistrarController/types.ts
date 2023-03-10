// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types'
import { MeshContext } from '@graphql-mesh/runtime'

export namespace EthRegistrarControllerTypes {
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

  export type QuerySdk = {
    /** null **/
    nameRegistered: InContextSdkMethod<
      Query['nameRegistered'],
      QuerynameRegisteredArgs,
      MeshContext
    >
    /** null **/
    nameRegistereds: InContextSdkMethod<
      Query['nameRegistereds'],
      QuerynameRegisteredsArgs,
      MeshContext
    >
    /** null **/
    nameRenewed: InContextSdkMethod<
      Query['nameRenewed'],
      QuerynameRenewedArgs,
      MeshContext
    >
    /** null **/
    nameReneweds: InContextSdkMethod<
      Query['nameReneweds'],
      QuerynameRenewedsArgs,
      MeshContext
    >
    /** null **/
    newPriceOracle: InContextSdkMethod<
      Query['newPriceOracle'],
      QuerynewPriceOracleArgs,
      MeshContext
    >
    /** null **/
    newPriceOracles: InContextSdkMethod<
      Query['newPriceOracles'],
      QuerynewPriceOraclesArgs,
      MeshContext
    >
    /** null **/
    ownershipTransferred: InContextSdkMethod<
      Query['ownershipTransferred'],
      QueryownershipTransferredArgs,
      MeshContext
    >
    /** null **/
    ownershipTransferreds: InContextSdkMethod<
      Query['ownershipTransferreds'],
      QueryownershipTransferredsArgs,
      MeshContext
    >
    /** Access to subgraph metadata **/
    _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  }

  export type MutationSdk = {}

  export type SubscriptionSdk = {
    /** null **/
    nameRegistered: InContextSdkMethod<
      Subscription['nameRegistered'],
      SubscriptionnameRegisteredArgs,
      MeshContext
    >
    /** null **/
    nameRegistereds: InContextSdkMethod<
      Subscription['nameRegistereds'],
      SubscriptionnameRegisteredsArgs,
      MeshContext
    >
    /** null **/
    nameRenewed: InContextSdkMethod<
      Subscription['nameRenewed'],
      SubscriptionnameRenewedArgs,
      MeshContext
    >
    /** null **/
    nameReneweds: InContextSdkMethod<
      Subscription['nameReneweds'],
      SubscriptionnameRenewedsArgs,
      MeshContext
    >
    /** null **/
    newPriceOracle: InContextSdkMethod<
      Subscription['newPriceOracle'],
      SubscriptionnewPriceOracleArgs,
      MeshContext
    >
    /** null **/
    newPriceOracles: InContextSdkMethod<
      Subscription['newPriceOracles'],
      SubscriptionnewPriceOraclesArgs,
      MeshContext
    >
    /** null **/
    ownershipTransferred: InContextSdkMethod<
      Subscription['ownershipTransferred'],
      SubscriptionownershipTransferredArgs,
      MeshContext
    >
    /** null **/
    ownershipTransferreds: InContextSdkMethod<
      Subscription['ownershipTransferreds'],
      SubscriptionownershipTransferredsArgs,
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
    ['ETHRegistrarController']: {
      Query: QuerySdk
      Mutation: MutationSdk
      Subscription: SubscriptionSdk
    }
  }
}
