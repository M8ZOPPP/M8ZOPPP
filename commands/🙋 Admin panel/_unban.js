/*CMD
  command: /unban
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🙋 Admin panel
  answer: _🔐 Send Telegram User Id To Unban User_

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var key = "5279986285"
if (user.telegramid== key){
Bot.setProperty(""+message+"" , "unban" , "string");
Bot.sendMessage("*🔐 User " +message+ " Has Been Unbanned Successfully*");
}else{
return
}
