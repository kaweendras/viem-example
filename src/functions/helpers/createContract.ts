import dotenv from "dotenv";
import { Hex } from "viem";
import createWalletclient from "../../utils/createWalletClient";
const Fun = require("../../artifacts/Fun.json");
import { getContract } from "viem";

dotenv.config();

const { abi, bytecode } = Fun;
const contractAddress = process.env.CONTRACT_ADDRESS as Hex;

const creaeContract = async () => {
  if (!contractAddress) {
    console.error(
      "Contract address is not provided or invalid. Please provide a valid contract address."
    );
    return;
  }
  const client = await createWalletclient();
  const contract = getContract({ abi, address: contractAddress, client });

  return contract;
};

export default creaeContract;
