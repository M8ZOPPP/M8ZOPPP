/*CMD
  command: /cbb
  help: 
  need_reply: true
  auto_retry_time: 
  folder: ð Admin panel
  answer: *ðHow Much Amount You To Cut In User Balance*

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
Bot.sendMessage("*Succesfully Cut Balance* \n*ð¤ User = "+tgid+"\nð° Amount= "+amount+"*");
}else{
return
}
