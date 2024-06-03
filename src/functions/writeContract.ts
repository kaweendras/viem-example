import dotenv from "dotenv";
import creaeContract from "./helpers/createContract";
import { Hex } from "viem";
const Fun = require("../artifacts/Fun.json");

dotenv.config();

const { abi, bytecode } = Fun;

const writeContract = async () => {
  const contract = await creaeContract();

  if (contract) {
    const txHash = await contract.write.changeX([5900]);

    console.log("Transaction Hash -", txHash);

    console.log("x value -", await contract.read.getX([]));
  }
};

writeContract();

export default writeContract;
