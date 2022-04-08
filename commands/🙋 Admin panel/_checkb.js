/*CMD
  command: /checkb
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🙋 Admin panel
  answer: *📌Send User Telegram Id To Check User Balance*
  keyboard: 
  aliases: 
CMD*/

if (message=="🚫 Cancel"){
Bot.runCommand("Adminp✓");
}else{
var id = message; 
var user_bal = Libs.ResourcesLib.anotherUserRes("balance" , id);
Bot.sendMessage("*💰User Balance = "+user_bal.value().toFixed(2)+"₹*")
}
