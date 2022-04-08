/*CMD
  command: 🤫Referral list
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Other
  answer: 
  keyboard: 
  aliases: 
CMD*/

var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();

var msg;
if(refList.length>0){
  msg = "TOTAL REFFERED " + refList.length + "\n\n";
  for(var i in refList){
    user = refList[i];
    msg+= "" +  user.first_name +"\n";
  }
}else{
  msg = "🙂 YOU DIDN'T INVITED ANYONE TO THIS BOT VIA YOUR REFER LINK";
}
Bot.sendMessage(msg);
