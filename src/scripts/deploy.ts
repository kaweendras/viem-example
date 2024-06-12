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
    args: [100],
  });
  console.log(`https://sepolia.arbiscan.io/tx/${hash}`);

  const receipt = await client.getTransactionReceipt({
    hash,
  });
  console.log("Contract Address -", receipt.contractAddress);
};

deployContract();

export default deployContract;
