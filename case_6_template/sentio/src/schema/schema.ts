
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { String, Int, BigInt, Float, ID, Bytes, Timestamp, Boolean, Int8 } from '@sentio/sdk/store'
import { Entity, Required, One, Many, Column, ListColumn, AbstractEntity } from '@sentio/sdk/store'
import { BigDecimal } from '@sentio/bigdecimal'
import { DatabaseSchema } from '@sentio/sdk'







interface PairConstructorInput {
  id: ID;
  token0: String;
  token1: String;
  createdAt: BigInt;
}
@Entity("Pair")
export class Pair extends AbstractEntity  {

	@Required
	@Column("ID")
	id: ID

	@Required
	@Column("String")
	token0: String

	@Required
	@Column("String")
	token1: String

	@Required
	@Column("BigInt")
	createdAt: BigInt
  constructor(data: PairConstructorInput) {super()}
  
  swaps(): Promise<Array<UniswapV2Event>> {
    return this.store.list(UniswapV2Event, [{field: 'pair', op: '=', value: this.id}])
  }
}


interface UniswapV2EventConstructorInput {
  id: ID;
  pairID?: ID;
  sender: String;
  to: String;
  amount0In: BigInt;
  amount0Out: BigInt;
  amount1In: BigInt;
  amount1Out: BigInt;
  timestamp: BigInt;
  blockNumber: BigInt;
}
@Entity("UniswapV2Event")
export class UniswapV2Event extends AbstractEntity  {

	@Required
	@Column("ID")
	id: ID

	@Required
	@One("Pair")
	_pair: Promise<Pair>

	pairID: ID

	@Required
	@Column("String")
	sender: String

	@Required
	@Column("String")
	to: String

	@Required
	@Column("BigInt")
	amount0In: BigInt

	@Required
	@Column("BigInt")
	amount0Out: BigInt

	@Required
	@Column("BigInt")
	amount1In: BigInt

	@Required
	@Column("BigInt")
	amount1Out: BigInt

	@Required
	@Column("BigInt")
	timestamp: BigInt

	@Required
	@Column("BigInt")
	blockNumber: BigInt
  constructor(data: UniswapV2EventConstructorInput) {super()}
  
  pair(): Promise<Pair> {
    return this._pair
  }

  setPair(pair: Pair) {
    if (pair) this.pairID = pair.id
  }
}


const source = `type Pair @entity {
  id: ID! # pair address
  token0: String!
  token1: String!
  createdAt: BigInt!
  swaps: [UniswapV2Event!]! @derivedFrom(field: "pair")
}

type UniswapV2Event @entity {
  id: ID! # transaction hash + log index
  pair: Pair! # pair address
  sender: String!
  to: String!
  amount0In: BigInt!
  amount0Out: BigInt!
  amount1In: BigInt!
  amount1Out: BigInt!
  timestamp: BigInt!
  blockNumber: BigInt!
} `
DatabaseSchema.register({
  source,
  entities: {
    "Pair": Pair,
		"UniswapV2Event": UniswapV2Event
  }
})
