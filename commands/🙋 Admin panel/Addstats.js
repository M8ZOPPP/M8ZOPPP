/*CMD
  command: Addstats
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🙋 Admin panel
  answer: ⚡️ Enter an fake statistics Amount

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var key = " 5279986285"
if (user.telegramid == key){
var stats = Libs.ResourcesLib.anotherChatRes("status", "global")
stats.add(+message)
Bot.sendMessage("*✅ Successfully Fake Statistics Added*")
}else{
return
}
