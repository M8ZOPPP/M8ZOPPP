/*CMD
  command: *
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Auto ban❗
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!request.contact) {
  return
}
if (request.forward_from || request.forward_from_chat) {
  Bot.sendMessage("*🤬 BSDK APNA NUMBER DE*")
  return
}
if (request.contact.vcard) {
  Bot.sendMessage("*🤬 BSDK APNA NUMBER DE*\nDon't Send From Contact!")
  return
}
if (!request.contact.user_id) {
  Bot.sendMessage("Don't Send From Contact!")
  return
}
if (user.telegramid != request.contact.user_id) {
  Bot.sendMessage("Don't Send Number Of Others")
  return
}
if (user.first_name != request.contact.first_name) {
  Bot.sendMessage("Don't Send Number Of Others")
  return
}
var phone_number = request.contact.phone_number
if (request.contact.phone_number[0] == "+") {
  var phone_number = phone_number.slice(2, 15)
}
if (phone_number.slice(0, 2) != 91) {
  Bot.sendMessage("*You Are not Indian!!!!!*")
Bot.runCommand("autob")
  return
}

Bot.sendMessage(+ phone_number + "*✅Verified*")

Bot.runCommand("/started")
