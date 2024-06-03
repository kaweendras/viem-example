import dotenv from "dotenv";
import creaeContract from "./helpers/createContract";
import sendTelegramMessage from "../utils/telegramBot";
import encodeMSG from "../utils/encodeMSG";

dotenv.config();

const events = async () => {
  const contract = await creaeContract();

  if (contract) {
    console.log("Watching for events...");
    await contract.watchEvent.XChanged(
      {},
      {
        onLogs: (logs) => {
          console.log("Logs -", logs);
          const encodedMsg = encodeMSG(logs[0]);
          sendTelegramMessage(encodedMsg);
        },
      }
    );
  }
};

events();

export default events;
