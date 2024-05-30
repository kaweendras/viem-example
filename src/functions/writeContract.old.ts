import dotenv from "dotenv";
import { Hex } from "viem";
import createWalletclient from "../utils/createWalletClient";
const Fun = require("../artifacts/Fun.json");

dotenv.config();

const { abi } = Fun;

const writeContract = async () => {
  const client = await createWalletclient();
  const txHash = await client.writeContract({
    abi,
    address: process.env.CONTRACT_ADDRESS as Hex,
    functionName: "changeX",
    args: [400],
  });

  console.log("Transaction Hash -", txHash);

  const receipt = await client.getTransactionReceipt({
    hash: txHash,
  });

  console.log("Status -", receipt.status);
};

writeContract();
