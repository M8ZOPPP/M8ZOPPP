/*CMD
  command: âï¸PAYOUT
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withdrawal
  answer: ENTER YOUR PAYTM NO.âð¥

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let wallet = User.getProperty("wallet")
User.setProperty("wallet" , data.message ,"string")
Bot.sendMessage("â PAYTM WALLET SET ð¤ ð"+data.message+"")
