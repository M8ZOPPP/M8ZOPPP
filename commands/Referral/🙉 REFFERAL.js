/*CMD
  command: ð REFFERAL
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Referral

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban*");
}else{

let res = Libs.ResourcesLib.userRes("referral");
let reflink=Libs.ReferralLib.currentUser.getRefLink(""+bot.name+"","REF");
let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage("*â¡ï¸ Referral system ð§\n\nðYou can earn â¹1/ per  Successful Refer\n \n\nð Your referal links : "+reflink+"*");
}
