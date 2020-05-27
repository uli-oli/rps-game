const Discord = require('discord.js');
const bot = new Discord.Client();
const { messageResponses } = require("./test.js");
const token = process.env.token;
const token2 = process.env.token2; //Different bot with same capabilities
//const token = 'token id from discord developer app';

const rps_server_gen_channel = '714957511123533877' //This is the channel ID from the RPS discord

bot.on('ready', () => {
    console.log('Bot in online');
    bot.channels.cache.get(rps_server_gen_channel).send('The bot is now online. Updates may have been deployed.');
})

bot.on("message", (message) => {
   if (messageResponses[messege.content]){
       messege.channel.send(messageResponses[message.content]);
   }
})

//bot.login(token);
bot.login(token2);