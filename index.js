const Discord = require('discord.js');
const bot = new Discord.Client();
const { messageResponses } = require("./message-responses.js");
const token = process.env.token; 
const token2 = process.env.token2; //Different bot with same capabilities
const rps_server_gen_channel = '714957511123533877' //This is the channel ID from the RPS discord
const PREFIX = '.';

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()+" UTC";
var date_time = date+' '+time;
var update_deployed = 'The bot is now online. Updates may have been deployed.'+' '+date_time

bot.on('ready', () => {
    console.log('Bot in online');
    bot.channels.cache.get(rps_server_gen_channel).send(update_deployed);
})

bot.on("message", (message) => {
   if (messageResponses[message.content]){
       message.channel.send(messageResponses[message.content]);
   }
})

bot.on("message", (message) => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        case 'help':
            message.reply('The only command is `.rps` to play rock paper, scissors.');
            break;
        case 'test':
            message.reply('Systems functioning.')
            break;
        case 'ping':
            message.reply('pong.');
            break;
        case 'rps':
            message.reply('Lets play rock, paper, scissors! Choose an emoji.').then(messageReaction => {
                messageReaction.react("✊");
                messageReaction.react("🖐️");
                messageReaction.react("✌️");
            })
            message.channel.send("Not fully functional. Currently being developed. Instead type: `.rock`, `.paper` or `.scissors`");
            break;
        // TEXT BASED ROCK PAPER SCISSORS GAME BELOW
        case 'rock':
            var random_number = Math.floor(Math.random()*3);
            if (random_number === 0){
                message.reply('Rock! We tied!');
            }
            if (random_number === 1){
                message.reply('Paper! I win!');
            }
            if (random_number === 2){
                message.reply('Scissors! You win!');
            }
            else{
                message.reply('Error. Number is: '+random_number);
            }
            break;
        case 'paper':
            var random_number = Math.floor(Math.random()*3);
            if (random_number === 0){
                message.reply('Rock! You win!');
            }
            if (random_number === 1){
                message.reply('Paper! We tied!');
            }
            if (random_number === 2){
                message.reply('Scissors! I win!');
            }
            else{
                message.reply('Error. Number is: '+random_number);
            }
            break;
        case 'scissors':
            var random_number = Math.floor(Math.random()*3);
            if (random_number === 0){
                message.reply('Rock! I win!');
            }
            if (random_number === 1){
                message.reply('Paper! You win!');
            }
            if (random_number === 2){
                message.reply('Scissors! We tied!');
            }
            else{
                message.reply('Error. Number is: '+random_number);
            }
            break;
    }
})

//bot.login(token);
bot.login(token2);
//bot.login('enter token here when testing');  //use this when testing