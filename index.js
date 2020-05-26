const Discord = require('discord.js');
const bot = new Discord.Client();
const { messageResponses } = require("./test.js");
const token = 'NzE0OTU2ODY0NzE0MDQ3NTUw.Xs2Nuw.gVUxrI0kk4cimMpGYChpxmTJNNM';

bot.on('ready', () => {
    console.log('Bot in online');
    bot.channels.cache.get('714957511123533877').send('The bot is online.');
})

bot.on('message', messege=>{
   if ( messege.content === "Hello"){
       messege.reply('Hello Back My Friend');
   }
   if (messageResponses[messege.content]){
       messege.channel.send(messageResponses[message.content]);
   }
})

bot.login(token);
