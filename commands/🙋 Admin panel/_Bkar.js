/*CMD
  command: /Bkar
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🙋 Admin panel
  answer: 🔒 Send Telegram User Id To Ban User_
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty(""+message+"" , "ban" , "string");

Bot.sendMessage(" 🔒 User " +message+ " Has Been banned Successfully");
