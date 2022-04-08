/*CMD
  command: ⚙️PAYOUT
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withdrawal
  answer: ENTER YOUR PAYTM NO.✅💥

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let wallet = User.getProperty("wallet")
User.setProperty("wallet" , data.message ,"string")
Bot.sendMessage("✅ PAYTM WALLET SET 🤗 👉"+data.message+"")
