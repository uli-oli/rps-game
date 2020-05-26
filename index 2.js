const Discord = require('discord.js');
const bot = new Discord.Client();

const { messageResponses } = require("./test.js");

const token = 'NzE0OTU2ODY0NzE0MDQ3NTUw.Xs2Nuw.gVUxrI0kk4cimMpGYChpxmTJNNM';
bot.on('ready', () => {
console.log('Bot in online');

})

bot.on('message', msg=>{
   if ( msg.content === "Hello"){
       msg.reply('Hello Back My Friend');
   }
})

bot.login(token);
