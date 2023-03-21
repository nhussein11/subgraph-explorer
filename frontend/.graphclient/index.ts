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
import type { TokenSubgraphTypes } from './sources/TokenSubgraph/types'
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
  OrderDirection: OrderDirection
  Query: ResolverTypeWrapper<{}>
  String: ResolverTypeWrapper<Scalars['String']>
  Subscription: ResolverTypeWrapper<{}>
  Token: ResolverTypeWrapper<Token>
  Token_filter: Token_filter
  Token_orderBy: Token_orderBy
  User: ResolverTypeWrapper<User>
  User_filter: User_filter
  User_orderBy: User_orderBy
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
  Query: {}
  String: Scalars['String']
  Subscription: {}
  Token: Token
  Token_filter: Token_filter
  User: User
  User_filter: User_filter
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

export type QueryResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
  token?: Resolver<
    Maybe<ResolversTypes['Token']>,
    ParentType,
    ContextType,
    RequireFields<QuerytokenArgs, 'id' | 'subgraphError'>
  >
  tokens?: Resolver<
    Array<ResolversTypes['Token']>,
    ParentType,
    ContextType,
    RequireFields<QuerytokensArgs, 'skip' | 'first' | 'subgraphError'>
  >
  user?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryuserArgs, 'id' | 'subgraphError'>
  >
  users?: Resolver<
    Array<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryusersArgs, 'skip' | 'first' | 'subgraphError'>
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
  token?: SubscriptionResolver<
    Maybe<ResolversTypes['Token']>,
    'token',
    ParentType,
    ContextType,
    RequireFields<SubscriptiontokenArgs, 'id' | 'subgraphError'>
  >
  tokens?: SubscriptionResolver<
    Array<ResolversTypes['Token']>,
    'tokens',
    ParentType,
    ContextType,
    RequireFields<SubscriptiontokensArgs, 'skip' | 'first' | 'subgraphError'>
  >
  user?: SubscriptionResolver<
    Maybe<ResolversTypes['User']>,
    'user',
    ParentType,
    ContextType,
    RequireFields<SubscriptionuserArgs, 'id' | 'subgraphError'>
  >
  users?: SubscriptionResolver<
    Array<ResolversTypes['User']>,
    'users',
    ParentType,
    ContextType,
    RequireFields<SubscriptionusersArgs, 'skip' | 'first' | 'subgraphError'>
  >
  _meta?: SubscriptionResolver<
    Maybe<ResolversTypes['_Meta_']>,
    '_meta',
    ParentType,
    ContextType,
    Partial<Subscription_metaArgs>
  >
}>

export type TokenResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  contentURI?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  metadataURI?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  createdAtTimestamp?: Resolver<
    ResolversTypes['BigInt'],
    ParentType,
    ContextType
  >
  creator?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type UserResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  tokens?: Resolver<
    Array<ResolversTypes['Token']>,
    ParentType,
    ContextType,
    RequireFields<UsertokensArgs, 'skip' | 'first'>
  >
  created?: Resolver<
    Array<ResolversTypes['Token']>,
    ParentType,
    ContextType,
    RequireFields<UsercreatedArgs, 'skip' | 'first'>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
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
  Query?: QueryResolvers<ContextType>
  Subscription?: SubscriptionResolvers<ContextType>
  Token?: TokenResolvers<ContextType>
  User?: UserResolvers<ContextType>
  _Block_?: _Block_Resolvers<ContextType>
  _Meta_?: _Meta_Resolvers<ContextType>
}>

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>
}>

export type MeshContext = TokenSubgraphTypes.Context & BaseMeshContext

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
    case '.graphclient/sources/TokenSubgraph/introspectionSchema':
      return import('./sources/TokenSubgraph/introspectionSchema') as T

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
  const tokenSubgraphTransforms = []
  const additionalTypeDefs = [] as any[]
  const tokenSubgraphHandler = new GraphqlHandler({
    name: 'TokenSubgraph',
    config: {
      endpoint:
        'https://api.studio.thegraph.com/query/43355/explorer-subgraph/v0.0.1',
    },
    baseDir,
    cache,
    pubsub,
    store: sourcesStore.child('TokenSubgraph'),
    logger: logger.child('TokenSubgraph'),
    importFn,
  })
  sources[0] = {
    name: 'TokenSubgraph',
    handler: tokenSubgraphHandler,
    transforms: tokenSubgraphTransforms,
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
          document: TokensByUsersQueryDocument,
          get rawSDL() {
            return printWithCache(TokensByUsersQueryDocument)
          },
          location: 'TokensByUsersQueryDocument.graphql',
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
export type TokensByUsersQueryQueryVariables = Exact<{ [key: string]: never }>

export type TokensByUsersQueryQuery = {
  users: Array<
    Pick<User, 'id'> & {
      tokens: Array<
        Pick<
          Token,
          'tokenId' | 'contentURI' | 'metadataURI' | 'createdAtTimestamp'
        >
      >
    }
  >
}

export const TokensByUsersQueryDocument = gql`
  query TokensByUsersQuery {
    users(first: 10) {
      id
      tokens {
        tokenId
        contentURI
        metadataURI
        createdAtTimestamp
      }
    }
  }
` as unknown as DocumentNode<
  TokensByUsersQueryQuery,
  TokensByUsersQueryQueryVariables
>

export type Requester<C = {}, E = unknown> = <R, V>(
  doc: DocumentNode,
  vars?: V,
  options?: C
) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    TokensByUsersQuery(
      variables?: TokensByUsersQueryQueryVariables,
      options?: C
    ): Promise<TokensByUsersQueryQuery> {
      return requester<
        TokensByUsersQueryQuery,
        TokensByUsersQueryQueryVariables
      >(
        TokensByUsersQueryDocument,
        variables,
        options
      ) as Promise<TokensByUsersQueryQuery>
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
