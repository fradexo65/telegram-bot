const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.BOT_TOKEN);
module.exports = async (ctx) => {
  async function forwardToGroup(ctx, groupId) {
    try {
      // проверяем наличие текста сообщения
      if (!ctx?.message?.text?.slice(6)) {
        throw new Error("Текст сообщения отсутствует");
      }

      // получаем текст сообщения, которое будем пересылать
      const userId = "#tg " + "tg://user?id=" + ctx.from.id + " Сообщение: ";
      const messageText = ctx.message.text.slice(6);

      // отправляем сообщение в группу по ее id
      await bot.telegram.sendMessage(
        process.env.GROUP_ID,
        userId + messageText
      );

      // отправляем ответ пользователю о том, что сообщение успешно переслано
      await ctx.reply(
        "Вы были добавлены в список! При бета-тесте сервера мы уведомим вас о начале."
      );
    } catch (err) {
      console.error(err);

      // отправляем ответ пользователю об ошибке
      await ctx.reply(`Ошибка: ${err.message}`);
    }
  }
  return await forwardToGroup(ctx, process.env.GROUP_ID);
};
