import { Block } from "../types";
import { SubstrateBlock } from "@subql/types";

export async function handleBlock(block: SubstrateBlock): Promise<void> {
  const id = block.hash.toHex()
  const blockEntity = new Block(id);
  blockEntity.number = block.block.header.number.toBigInt();
  blockEntity.timestamp = BigInt( block.timestamp.toString());
  await blockEntity.save();
}
