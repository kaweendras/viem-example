import { arbitrumSepolia } from "viem/chains";
import { Hex, createWalletClient, http, publicActions } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import dotenv from "dotenv";
dotenv.config();

const privateKey = process.env.PRIVATE_KEY;
const account = privateKeyToAccount(privateKey as Hex);

const createWalletclient = async () => {
  const client = await createWalletClient({
    account,
    chain: arbitrumSepolia,
    transport: http(process.env.API_KEY),
  }).extend(publicActions);

  return client;
};

export default createWalletclient;
