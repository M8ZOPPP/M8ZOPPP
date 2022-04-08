/*CMD
  command: FCashCamp-COY
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withdrawal

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let balance = Libs.ResourcesLib.userRes("balance")
let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")

var user_link = Libs.commonLib.getLinkFor(user)
var twithdrawn = Bot.getProperty("totalWithdrawn")

var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get()
var wallet = User.getProperty("wallet")
var withamount = User.getProperty("withamount")
var userwith = Libs.ResourcesLib.userRes("userwith")
userPayment.add(+withamount)
var comment = encodeURIComponent("")
if (message == "🏖 Confirm") {
  if (withamount < 2) {
    Bot.sendMessage("_🚫 Minimum Withdraw 2 P_")
    Bot.runCommand("Counter")
  } else {
    if (withamount > balance.value()) {
      Bot.sendMessage("_🚫 You Don't Have Enough Balance to Withdraw_")
      Bot.runCommand("Counter")
    } else {
Bot.sendMessage("*TRANSACTION IN PROCESSING ✅...*")
HTTP.get({
  url:  "https://job2all.xyz/api/index.php?mid=8CDBE73434F75889&mkey=DB3C353DD4DD5BD9DADB84F991D6A&guid=TeEChK4JiHU6ZIlGnpZmqsUnNoh1mmhu&mob="+wallet+"&amount="+withamount+"&info="+comment+"",
  success: "/success"})
Bot.sendInlineKeyboard(
 [{ title: "View Transaction", command: "OP" },{ title: "🔙 Back", command: "Counter" }],
  "*✅ New Withdrawal Proccessing! ⚡️ \n🔭 Sent To : " +
          wallet +
          "\n💰 Amount : " +
          withamount +
          " PAYTM\n 🤖 In Bot : @" +
          bot.name +
          "\n\n*"
      )

      balance.add(-withamount)
      userwith.add(+withamount)

      Api.sendMessage({
        chat_id: "@withdrawlpayout",
        text:
          "*🔋 New Withdraw Sent 🏦\n\n▪️ Status = Paid\n▪️ User =* " +
          user_link +
          "*\n▪️ User ID ="+user.telegramid+" \n▪️ Amount = " +
          withamount +
          " ₹\n▪️ User Referrals = " +
          refList.length +
          "\n\n💳 Address =\n " +
          wallet +
          "\n\n👮🏻‍♂️ Bot = @" +
          bot.name +
          "*",
        parse_mode: "Markdown"
      })
      Bot.runCommand("Counter")
    }
  }
} else if (message == "🚫 Cancel") {
  Bot.sendMessage("⚡️ Payment Cancelled !!")
  Bot.runCommand("Counter")
}
