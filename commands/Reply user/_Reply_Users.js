/*CMD
  command: /Reply_Users
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Reply user
  answer: *✏️Enter The User Id Who Need To Get Your Message*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

 if(user.telegramid == "5279986285"){
Bot.run({ 
command: "/Reply_Him",
options: { tgid : message }
})}
