/*CMD
  command: 💳 Withdra
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Withdrawal
  answer: 🙂

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let stat = Bot.getProperty("" + user.telegramid + "")
let wdinfo = Bot.getProperty("wdInfo")
if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
  let balance = Libs.ResourcesLib.userRes("balance")
  let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
  var wallet = User.getProperty("wallet")
  if (wallet == undefined) {
    var button = ("Add Paytm No,🔙 Back,⛔️ Cancel")
    Bot.sendKeyboard(button, "*🚫 Your wallet is not set 👇*")
  } else {
    if (balance.value()<2) {
      Bot.sendMessage("_⚠️ 2 Rs ONLY _")
    } else {
Bot.sendMessage("PLEASE ENTER AMOUNT TO WITHDRAW ✅"
      )
      Bot.runCommand("MCashCamp-COY")
    }
  }
}

