/*CMD
  command: Counter
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Home 🏠🏠

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 🔙 back, ⛔️ cancel
CMD*/

var userstat = User.getProperty("status");
var referred = User.getProperty("referred");
if (userstat=="member" | userstat =="administrator" | userstat=="creator"){

if (referred == undefined){
let refUser = Libs.ReferralLib.currentUser.attractedByUser()
if (refUser){
  var balanceref = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
  balanceref.add(1)
  Bot.sendMessageToChatWithId(refUser.chatId, "🥳YOUR REFFERAL JOINED OUR BOT\n*New User :* "+"[" +user.telegramid+"]" + "(" + "tg://user?id=" + user.telegramid + ")")
User.setProperty("referred", user.telegramid, "integer")}
}
var balance = Libs.ResourcesLib.userRes("balance");
var ref = Libs.ResourcesLib.userRes("referral");
var msgid = User.getProperty("msgid")
Api.deleteMessage({
message_id : msgid
})
Bot.sendKeyboard("BALANCE⛽,❤️ SURPRISE\n🙉 REFFERAL,⚙️PAYOUT,💳 Withdraw\n📞 Support,📊 Statistics,\n🤫Referral list,🗣️ Task Panal",
    "*🏠 Home Menu*")

}
if (user=="left"){
Bot.runCommand("/start");
}
