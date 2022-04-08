/*CMD
  command: autob
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Auto ban❗
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty(""+user.telegramid+"" , "ban" , "string");

Bot.sendMessage(" *🔒 User " +user.telegramid+ " Has Been banned Successfully* \n 🤬 AUTOMATICALLY BAN BY SYSTEM");
