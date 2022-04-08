/*CMD
  command: check2
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var user = options.result.status
User.setProperty("status", user, "string")
if ((user == "member") | (user == "administrator") | (user == "creator")) {
  Bot.runCommand("joinedbolte")//if need more channel in join change this to Joined 
  User.addToGroup("user")
}

if (user == "left") {
  Bot.sendMessage("*You didnt Join  Channel *")
  Bot.runCommand("/started")
}
