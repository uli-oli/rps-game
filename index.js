const Discord = require('discord.js');
const bot = new Discord.Client();
const { messageResponses } = require("./message-responses.js");
const token = process.env.token; 
const token2 = process.env.token2; //Different bot with same capabilities
const rps_server_gen_channel = '714957511123533877' //This is the channel ID from the RPS discord
const PREFIX = '!';

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()+":"+today.getMilliseconds();
var date_time = date+' '+time;

bot.on('ready', () => {
    console.log('Bot in online');
    bot.channels.cache.get(rps_server_gen_channel).send('The bot is now online. Updates may have been deployed.'+' '+date_time);
    //bot.channels.cache.get(rps_server_gen_channel).send(date_time);
})

bot.on("message", (message) => {
   if (messageResponses[message.content]){
       message.channel.send(messageResponses[message.content]);
   }
})

bot.on("message", (message) => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        case 'ping':
            message.reply('pong!')
            break;
    }
})

//bot.login(token);
bot.login(token2);