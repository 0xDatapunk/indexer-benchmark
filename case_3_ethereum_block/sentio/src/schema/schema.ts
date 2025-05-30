
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { String, Int, BigInt, Float, ID, Bytes, Timestamp, Boolean, Int8 } from '@sentio/sdk/store'
import { Entity, Required, One, Many, Column, ListColumn, AbstractEntity } from '@sentio/sdk/store'
import { BigDecimal } from '@sentio/bigdecimal'
import { DatabaseSchema } from '@sentio/sdk'







interface BlockConstructorInput {
  id: ID;
  number: BigInt;
  hash: String;
  parentHash: String;
  timestamp: BigInt;
}
@Entity("Block")
export class Block extends AbstractEntity  {

	@Required
	@Column("ID")
	id: ID

	@Required
	@Column("BigInt")
	number: BigInt

	@Required
	@Column("String")
	hash: String

	@Required
	@Column("String")
	parentHash: String

	@Required
	@Column("BigInt")
	timestamp: BigInt
  constructor(data: BlockConstructorInput) {super()}
  
}


const source = `
type Block @entity {
  id: ID!
  number: BigInt!
  hash: String!
  parentHash: String!
  timestamp: BigInt!
}
`
DatabaseSchema.register({
  source,
  entities: {
    "Block": Block
  }
})
