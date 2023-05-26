const { Telegraf } = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);

let startCommand = require("./commands/start");
let writeCommand = require("./commands/write");

bot.start(startCommand);
bot.command(writeCommand);

bot.launch();
