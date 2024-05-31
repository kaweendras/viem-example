import dotenv from "dotenv";
import { send } from "process";
dotenv.config();

const sendTelegramMessage = async (message: any) => {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (token && chatId) {
    console.log("Sending message to telegram...");

    //     const eventResult = JSON.stringify(
    //       message[0],
    //       (key, value) => (typeof value === "bigint" ? value.toString() : value),
    //       2
    //     );
    //     let formattedMsg = `<b>X value Changed</b> 🚀\n
    //   <code>${eventResult}</code>\n▶️Project - <a href="https://github.com/kaweendras/viem-example">VIEM Examples</a>◀️`;

    //     formattedMsg = encodeURIComponent(formattedMsg);

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
