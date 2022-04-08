/*CMD
  command: /cbb
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🙋 Admin panel
  answer: *📌How Much Amount You To Cut In User Balance*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var key = "5279986285"
if (user.telegramid == key){
let amount = parseFloat(message);
let tgid = User.getProperty("id");
let res = Libs.ResourcesLib.anotherUserRes("balance", tgid);
res.add(parseFloat(-amount));
Bot.sendMessage("*Succesfully Cut Balance* \n*👤 User = "+tgid+"\n💰 Amount= "+amount+"*");
}else{
return
}
