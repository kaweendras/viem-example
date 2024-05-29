import dotenv from "dotenv";

import { createClient } from "../utils/createClient";
import { Hex } from "viem";

dotenv.config();

const accountAddress = process.env.ACCOUNT_ADDRESS;

const checkTransactionCount = async () => {
  const client = await createClient();

  const txCount = await client.getTransactionCount({
    address: accountAddress as Hex,
  });

  console.log("Tx Count -", txCount);
};

export default checkTransactionCount;
