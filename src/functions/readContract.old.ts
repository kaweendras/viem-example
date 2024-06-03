import dotenv from "dotenv";
import { Hex } from "viem";
import createWalletclient from "../utils/createWalletClient";
const Fun = require("../artifacts/Fun.json");

dotenv.config();

const { abi, bytecode } = Fun;

const readContractOld = async () => {
  const client = await createWalletclient();
  const xValue = await client.readContract({
    abi,
    address: process.env.CONTRACT_ADDRESS as Hex,
    functionName: "getX",
    args: [],
  });

  console.log("x value -", xValue);
};

readContractOld();

export default readContractOld;
