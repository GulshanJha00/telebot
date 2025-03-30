const express = require("express");
const app = express();
global.punycode = require("punycode/");
const route = require("./routes/route")
require("dotenv").config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_BOT;
const bot = new TelegramBot(token, {polling: true});

let msgtext;

async function testResponse() {
  const response = await route("hello bhai");
  console.log("Response is:-", response); // Use `,` instead of `+` for better readability
}

testResponse();
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  msgtext = msg.text;
  
  bot.sendMessage(chatId, );
});


app.listen(3000, () => {
  console.log("Working on port 3000");
});
