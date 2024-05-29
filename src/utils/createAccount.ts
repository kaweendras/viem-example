import crypto from "crypto";
import { privateKeyToAccount } from "viem/accounts";

//creating new private key

const createAccount = () => {
  const privateKey = crypto.randomBytes(32).toString("hex");
  const formattedPrivateKey = `0x${privateKey}`;
  const account = privateKeyToAccount(formattedPrivateKey as `0x${string}`);

  console.log("Private Key -", formattedPrivateKey);
  console.log("Account Address -", account.address);
  console.log("Account Public Key -", account.publicKey);
};

export default createAccount;
