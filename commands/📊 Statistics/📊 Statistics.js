/*CMD
  command: 📊 Statistics
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 📊 Statistics

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
  var withdraw = Libs.ResourcesLib.anotherChatRes("withdraw", "global")
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
    .value()
    .toFixed(0)

  var stat =
    "*👦🏻  Total Users: "+
    status +"\n\n💵 Total Withdraw : " +
    withdraw.value().toFixed(2) +
    " PAYTM\n\n🙋 Bot coded by:- @bolte_hame_bot\n\n *"

  Bot.sendMessage(stat)
}
