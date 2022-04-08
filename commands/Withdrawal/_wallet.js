/*CMD
  command: /wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withdrawal

  <<ANSWER
*✏️ Send now your PAYTM address to use it in future withdrawals.*

_⚠️ This Wallet Will be used for withdrawals !!_
  ANSWER
  keyboard: ⛔️ Cancel
  aliases: 
CMD*/

var wallet = User.getProperty("wallet")
var wallet = User.setProperty("wallet", message, "string")
Bot.sendMessage("*Wallet Set :* "+message+"")
Bot.runCommand("Counter")
