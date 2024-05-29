import { createPublicClient, http } from "viem";
import { arbitrumSepolia } from "viem/chains";

export const createClient = async () => {
  const client = await createPublicClient({
    chain: arbitrumSepolia,
    transport: http(process.env.API_KEY),
  });

  return client;
};
