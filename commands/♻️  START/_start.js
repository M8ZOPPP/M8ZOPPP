/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: ♻️  START

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Bot.sendMessage("*👋 Hey \n             " +user.first_name+ " \n\nWelcome To The Our Bot✅🙂\nREAL AUTOPAY BOT 💥\n\n🙌⚙️🧑🏻‍💻*")
var keyboard = [
  [
    {
      text: "PHONE NUMBER ✅",
      request_contact: true
    }
  ]
]
Api.sendMessage({
  text:
    "*PHONE NUMBER VERIFY 🚧\nCONFIRM FOR VERIFICATION 🙌.*",
  parse_mode: "markdown",
  reply_markup: {
    keyboard: keyboard,
    resize_keyboard: true
  }
})

var user_link = Libs.commonLib.getLinkFor(user)

function hello(message) {
  var greetings = ""

  Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
  Bot.sendMessage("*❌You're Trying To Invite You're Self *")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  hello("")
  Bot.sendMessageToChatWithId(
    refUser.chatId,
    "*✅ A new User Joined From Your Refer Link*"
  )
}

function doAlreadyAttracted() {
  Bot.sendMessage("*🚫You Already Started The Bot *")
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions)
var status = Libs.ResourcesLib.anotherChatRes("status", "global")

var welco = User.getProperty("welco")
if (welco == undefined) {
  var user_link =
    "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  status.add(1)
  var button = [{ title : "✴️ INSTANT BAN ✴️" , command : "/Bkar" }]
Bot.sendInlineKeyboardToChatWithId(5279986285,button , "*👤New User👤*\n\n*🧑User = " +
      user.first_name +
      "\n\n🔆Username =* " +
      user_link +
      " \n\n*🔅User Id =* `" +
      user.telegramid +
      "`")
User.setProperty ("new_user",true,"boolean")

  User.setProperty("new_user", true, "boolean")
}
User.setProperty("welco", user.telegramid, "text")
var fullBotUsers = Bot.getProperty("wholeUsers",[])
var already = User.getProperty("already")
if (!already) {
  User.setProperty("already", "DONE", "string")
  fullBotUsers.push(user.telegramid)
  Bot.setProperty("wholeUsers", fullBotUsers, "json")
}
