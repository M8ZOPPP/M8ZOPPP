/*CMD
  command: /abd✓
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🙋 Admin panel
  answer: *📌Send User Telegram Id To Change His/Her Balance*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var key = " 5279986285"
if (user.telegramid == key){
let msg = message;
User.setProperty("id", msg, "integer");
Bot.runCommand  ("/bb✓");
}else{
return
}
