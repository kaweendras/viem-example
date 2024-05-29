import dotenv from "dotenv";

import { formatEther } from "viem";
import { createClient } from "./utils/createClient";


dotenv.config();

const accountAddress = process.env.ACCOUNT_ADDRESS;

const balance = async () => {

  const client = await createClient();

  const balance = await client.getBalance({
    address: accountAddress as `0x${string}`,
  });

  const formattedBalance = formatEther(balance);
  console.log("Balance -", formattedBalance);

};

balance();
