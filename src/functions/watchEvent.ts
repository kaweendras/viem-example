import dotenv from "dotenv";
import creaeContract from "./helpers/createContract";
const Fun = require("../artifacts/Fun.json");
dotenv.config();

const contractAddress = process.env.CONTRACT_ADDRESS;

const events = async () => {
  const contract = await creaeContract();

  if (contract) {
    await contract.watchEvent.XChanged(
      {},
      {
        onLogs: (logs) => {
          console.log("Logs -", logs);
        },
      }
    );
  }
};

events();
