/*CMD
  command: MCashCamp-COY
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withdrawal
  answer: 
  keyboard: 
  aliases: 
CMD*/

let balance = Libs.ResourcesLib.userRes("balance")
let withdrawn = Libs.ResourcesLib.userRes("withdrawn")

var stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
  var withdraw = Libs.ResourcesLib.anotherChatRes("withdraw", "global")
withdraw.add(+message)
  var twithdrawn = Bot.getProperty("totalWithdrawn")
  withdrawn = parseFloat(withdrawn)
  var lib = Libs.ReferralLib
  var refList = lib.currentUser.refList.get()
  var wallet = User.getProperty("wallet")
  var withamount = User.getProperty("withamount")

  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }
  var value = message
  if (!isNumeric(value)) {
    Bot.sendMessage("*â ï¸ Please use " + balance.value() + " 1 Amount Only !*", {
      is_reply: true
    })
    Bot.runCommand("ð³ Withdraw")
    return
  } else {
    Bot.sendKeyboard(
      "ð Confirm,ð« Cancel",
      "*ð§ Confirmation : ð§\n\nðPaytm Number : *`" +
        wallet +
        "`\n*ð° Amount : *`" +
        message +
        "` (fee: 0`%`)\n\n" +
        "*â¡ï¸ Confirm Your Payment by clicking on* Confirm"
    )
    var withamount = User.setProperty("withamount", message, "integer")
    Bot.runCommand("FCashCamp-COY")
  }
}

