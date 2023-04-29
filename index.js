const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot("6159860437:AAGabAv67-CYR8hCOdhy7qwnuW__0izeacQ", {
  polling: true,
});
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Welcome! Adminstrator @RealCoderUz");
});
bot.on("message", (msg) => {
  bot.sendMessage(msg.chat.id, `New Text : ${msg.text}`);
});
