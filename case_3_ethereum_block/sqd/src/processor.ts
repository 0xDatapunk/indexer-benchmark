import {assertNotNull} from '@subsquid/util-internal'
import {
    BlockHeader,
    DataHandlerContext,
    EvmBatchProcessor,
    EvmBatchProcessorFields,
    Log as _Log,
    Transaction as _Transaction,
} from '@subsquid/evm-processor'

export const processor = new EvmBatchProcessor()
    // Lookup archive by the network name in Subsquid registry
    // See https://docs.subsquid.io/evm-indexing/supported-networks/
    .setGateway('https://v2.archive.subsquid.io/network/ethereum-mainnet')
    // Chain RPC endpoint is required for
    //  - indexing unfinalized blocks https://docs.subsquid.io/basics/unfinalized-blocks/
    //  - querying the contract state https://docs.subsquid.io/evm-indexing/query-state/
    .setRpcEndpoint({
        // Set the URL via .env for local runs or via secrets when deploying to Subsquid Cloud
        // https://docs.subsquid.io/deploy-squid/env-variables/
        url: assertNotNull(process.env.RPC_ETH_HTTP, 'No RPC endpoint supplied'),
        // More RPC connection options at https://docs.subsquid.io/evm-indexing/configuration/initialization/#set-data-source
        rateLimit: 10
    })
    .setFinalityConfirmation(75)
    .setFields({
        block: {
            height: true,
            timestamp: true,
            hash: true,
            parentHash: true,
        },
    })
    .setBlockRange({
        from: 0,
        to:   10000000,
    })
    .addTransaction({
    })

export type Fields = EvmBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>
