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
Bot.sendMessage("๐ Message Sended to Admin As :-  "+message+"")
Bot.sendMessageToChatWithId(5279986285, "*๐New Support Message From User\n\n๐ฐ User =* ["+user.first_name+"](tg://user?id="+user.telegramid+")\n\n*๐Telegram id* = `"+user.telegramid+"`\n\n*๐ Message = "+message+"\n\nClick The Command To Reply:- /Reply_Users*")
Bot.runCommand("Counter")
