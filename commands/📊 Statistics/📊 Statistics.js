/*CMD
  command: š Statistics
  help: 
  need_reply: false
  auto_retry_time: 
  folder: š Statistics

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
    "*š¦š»  Total Users: "+
    status +"\n\nšµ Total Withdraw : " +
    withdraw.value().toFixed(2) +
    " PAYTM\n\nš Bot coded by:- @bolte_hame_bot\n\n *"

  Bot.sendMessage(stat)
}
