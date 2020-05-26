const Discord = require('discord.js');
const bot = new Discord.Client();
const { messageResponses } = require("./test.js");
//const token = 'token id from discord developer app';
const token = process.env.token;

const rps_server_gen_channel = '714957511123533877' //This is the channel ID from the RPS discord

bot.on('ready', () => {
    console.log('Bot in online');
    bot.channels.cache.get(rps_server_gen_channel).send('The bot is now online. Updates may have been deployed.');
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
