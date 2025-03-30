const express = require("express");
const app = express();
const route = require("./routes/route")
require("dotenv").config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_BOT;
const bot = new TelegramBot(token, {polling: true});


bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const response = await route(msg.text);
  console.log("Response is:-", response);
  bot.sendMessage(chatId, response);
});


app.listen(3000, () => {
  console.log("Working on port 3000");
});
