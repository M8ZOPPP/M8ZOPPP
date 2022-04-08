/*CMD
  command: Adminp
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 🙋 Admin panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var key = "5279986285"
if (user.telegramid == key){
var button = [[{title:"🔄 Add Balance",command:"/abd✓"},{title:"♒ Cut Balance",command:"/cb"}],[{title:"💰Check User Balance",command:"/checkb"}],[{title:"🛑 Ban User",command:"/Bkar"},{title:"✅ Unban User",command:"/unban"}],
[{title:"🎙 Broadcast",command:"SENDED"}],[{title:"✴️ Transfer Bot",command:"Ok bye"},{title:"🦞 On / 🙅 Off  Bot",command:"/Mai"}],
[{title:" 💬 Chat With Bot 💬",command:"//Hi"}],
[{title:"♻️ Chat With User",command:"/Reply_Users"},{title:"💱 Add Statistics",command:"Addstats"}]]

Bot.sendInlineKeyboard(button,"*Hey 👋 \n              " +user.first_name+ "\n\n♨️Welcome To The Admin Panel🧑🏻‍💻\n\n‼️Warning When Using This Panel Please Don't Send Any Other Command It May Spoil Your Work\n\n🌐Coded By = @bot_maker0*")
}else{
Bot.sendMessage("❌You Are Not An Admin !")
}
