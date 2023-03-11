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
