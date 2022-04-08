/*CMD
  command: /done
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Reply user
  answer: *📝 Enter Your Message For User*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var tgid = options.tgid
Api.sendMessage({
chat_id: tgid,
text: "*SYSTEM MESSAGE ⚙️\n\nPAYMENT INITIATED SUCCESSFULLY ✅ = "+message+"*",
parse_mode: "markdown" })
Bot.sendMessage("*📞 Message Sended To User = "+tgid+"*")
