import dotenv from "dotenv";
import { createPublicClient, http } from "viem";
import { arbitrumSepolia } from "viem/chains";

dotenv.config();

const accountAddress = process.env.ACCOUNT_ADDRESS;

const balance = async () => {
  const client = await createPublicClient({
    chain: arbitrumSepolia,
    transport: http(process.env.API_KEY),
  });

  const balance = await client.getBalance({
    address: accountAddress as `0x${string}`,
  });

  console.log("Balance -", balance);
};

balance();
