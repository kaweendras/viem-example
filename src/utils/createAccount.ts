import crypto from "crypto";
import { Hex } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import fs from "fs";
import path from "path";

//creating new private key

const createAccount = () => {
  const privateKey = crypto.randomBytes(32).toString("hex");
  const formattedPrivateKey = `0x${privateKey}`;
  const account = privateKeyToAccount(formattedPrivateKey as Hex);

  console.log("Private Key -", formattedPrivateKey);
  console.log("Account Address -", account.address);
  console.log("Account Public Key -", account.publicKey);

try {
  fs.writeFileSync(
    path.join(__dirname, "../artifacts", `accounts-${Date.now()}.json`),
    JSON.stringify({
      privateKey: formattedPrivateKey,
      address: account.address,
      publicKey: account.publicKey,
    })
  );
} catch (error) {
  console.error("Error writing account to file:", error);
}








  return {
    privateKey: formattedPrivateKey,
    address: account.address,
    publicKey: account.publicKey,
  };
};

export default createAccount;
