import dotenv from "dotenv";
import { Hex } from "viem";
import createWalletclient from "../utils/createWalletClient";
const Fun = require("../artifacts/Fun.json");

dotenv.config();

const { abi, bytecode } = Fun;

const deployContract = async () => {
  const client = await createWalletclient();
  const hash = await client.deployContract({
    abi,
    bytecode: bytecode.startsWith("0x") ? bytecode : `0x${bytecode}`,
    args: [],
  });
  console.log(`https://sepolia.arbiscan.io/tx/${hash}`);

  const receipt = await client.getTransactionReceipt({
    hash: "0x495f2d47fb7db2f26cc111b337133398221dff10b11ad80fee0e6a55ee77b9f6",
  });
  console.log("Contract Address -", receipt.contractAddress);
};

deployContract();
