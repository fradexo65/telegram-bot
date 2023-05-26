const { Telegraf, Markup } = require("telegraf");

module.exports = async (ctx) => {
  return ctx.reply(
    "Привет! К сожаления сервер на данный момент не доступен. Но ты можешь записаться на бета-тест написав комманду\n/write [ссылка на стим и желательно ссылку на вк] \n\nОткрытие 15 июля 2023 года!",
    Markup.inlineKeyboard([[{ text: "Сайт", url: "https://shadowseek.ru" }]])
  );
  ctx.answerCbQuery();
};
