const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "8610152921:AAEA7O_IgCPRI32Ak7h3R0Z22fCm47SKHkk";
const CHANNEL_LINK = "https://t.me/punt_bull";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/^\/start(?:@\w+)?(?:\s.*)?$/, async (msg) => {
  const chatId = msg.chat.id;

  const text = `Welcome to PUNT BULL! 📚

This platform is created for educational purposes only.

Explore market insights, learning-based chart analysis, and easy-to-understand trading concepts.
Improve your knowledge step by step with us.

🚀 Learn • Understand • Grow
📚 Educational Content Only – No Financial Advice

⚠️ Disclaimer:
We do not provide investment advice or guarantee profits.
Trading involves risk, including loss of capital.
All content is for educational purposes only.

Tap the button below 👇`;

  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "📢 Join Official Channel",
            url: CHANNEL_LINK,
          },
        ],
      ],
    },
  };

  try {
    await bot.sendMessage(chatId, text, options);
  } catch (error) {
    console.error(
      "Message send nahi hua:",
      error.code || "UNKNOWN_ERROR"
    );
  }
});

bot.on("polling_error", (error) => {
  console.error("Polling error:", error.code || "UNKNOWN_ERROR");
});

console.log("PUNT BULL bot is running...");
