import dotenv from "dotenv";

import { Hex, formatEther } from "viem";
import { createClient } from "../utils/createClient";

dotenv.config();

const accountAddress = process.env.ACCOUNT_ADDRESS;

const checkBalance = async () => {
  const client = await createClient();

  const balance = await client.getBalance({
    address: accountAddress as Hex,
  });

  const formattedBalance = formatEther(balance);
  console.log("Balance -", formattedBalance);
};

export default checkBalance;
