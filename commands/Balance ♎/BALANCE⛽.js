/*CMD
  command: BALANCE⛽
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Balance ♎

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")

if ("💰 : "+balance.value()+" PAYTM"){
var balance = Libs.ResourcesLib.userRes("balance")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
var userwith = Libs.ResourcesLib.userRes("userwith")
Bot.sendMessage("*🤟USER ACCOUNT OF "+user.first_name+"👇*\n\n BALANCE😎👉 *"+balance.value().toFixed(4)+"* PAYTM\n\n😊Withdrawn 👉*"+userwith.value().toFixed(4)+"* PAYTM")
if (user=="left"){
Bot.runCommand("/started")
}
}
