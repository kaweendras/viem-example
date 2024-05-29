import dotenv from "dotenv";

import { createClient } from "../utils/createClient";

dotenv.config();

const accountAddress = process.env.ACCOUNT_ADDRESS;

const checkTransactionCount = async () => {
  const client = await createClient();

  const txCount = await client.getTransactionCount({
    address: accountAddress as `0x${string}`,
  });

  console.log("Tx Count -", txCount);
};

export default checkTransactionCount;
