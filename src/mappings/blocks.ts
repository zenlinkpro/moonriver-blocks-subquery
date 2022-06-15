import { Block } from "../types";
import { SubstrateBlock } from "@subql/types";

export async function handleBlock(block: SubstrateBlock): Promise<void> {
  const id = block.block.header.hash.toString()
  const blockEntity = new Block(id);
  blockEntity.number = block.block.header.number.toBigInt();
  blockEntity.timestamp = BigInt(block.timestamp.getTime())
  await blockEntity.save();
}
