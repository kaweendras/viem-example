import dotenv from "dotenv";
import { send } from "process";
dotenv.config();

const sendTelegramMessage = async (message: any) => {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (token && chatId) {
    console.log("Sending message to telegram...");

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}&parse_mode=HTML`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.ok) {
      console.log("Message sent successfully ✅");
    } else {
      console.error("Error sending message to telegram ❌");
    }
  }
};

export default sendTelegramMessage;
