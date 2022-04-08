/*CMD
  command: 🙉 REFFERAL
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
Bot.sendMessage("*⚡️ Referral system 🚧\n\n💝You can earn ₹1/ per  Successful Refer\n \n\n🚀 Your referal links : "+reflink+"*");
}
