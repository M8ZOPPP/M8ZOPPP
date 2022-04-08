/*CMD
  command: SENDED
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🙋 Admin panel
  answer: Messages

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var fullBotUsers = Bot.getProperty("wholeUsers")
var usrname = "@" + user.username
Bot.sendMessage("Starting Broadcast....")
if (!user.username) {
  var usrname =
    "[" + user.first_name + "](tg://user?id=" + user.telegramid + ")"
}
//STICKER broad
if (request.sticker) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
    Api.sendMessage({
      chat_id: info,
      text: "🗣️IMPORTANT MESSAGE🗣️"
    })
    Api.sendSticker({ chat_id: info, sticker: request.sticker.file_id })
  }
  return
}
//END
var promo = ""
if (request.entities[0]) {
  if (request.entities[0].type == "url") {
    var promo = "Promotional"
  }
}
if (request.animation) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
    Api.sendMessage({
      chat_id: info,
      text: "🗣️IMPORTANT MESSAGE🗣️"
    })
    Api.sendAnimation({ chat_id: info, animation: request.animation.file_id })
  }
  return
}
if (message.length > 1000) {
  Bot.sendMessage("Message Too Big.")
  return
}
for (var index in fullBotUsers) {
  var info = fullBotUsers[index]
  Api.sendMessage({
    chat_id: info,
    text:"🙌ADMIN MESSAGE 🤔\n<code>———————————————————————</code>\n\n" +
      message +
      "\n\n<code>———————————————————————</code>",
    parse_mode: "HTML"
  })
}
Bot.sendMessage("✔Broadcast Sent")
