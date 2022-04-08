/*CMD
  command: Ask
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Support

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let Ask = User.getProperty("Ask")
User.setProperty("Ask" ,message ,"string")
Bot.sendMessage("📌 Message Sended to Admin As :-  "+message+"")
Bot.sendMessageToChatWithId(5279986285, "*🖊New Support Message From User\n\n🔰 User =* ["+user.first_name+"](tg://user?id="+user.telegramid+")\n\n*🆔Telegram id* = `"+user.telegramid+"`\n\n*💌 Message = "+message+"\n\nClick The Command To Reply:- /Reply_Users*")
Bot.runCommand("Counter")
