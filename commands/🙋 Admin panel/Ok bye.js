/*CMD
  command: Ok bye
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🙋 Admin panel
  answer: *Send bb 📬 mail *

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("Done")
