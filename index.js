const Discord = require('discord.js');
const bot = new Discord.Client();
const { messageResponses } = require("./message-responses.js");
const token = process.env.token; 
const token2 = process.env.token2; //Different bot with same capabilities
const rps_server_gen_channel = '714957511123533877' //This is the channel ID from the RPS discord
const bot1_id = '714953926994296994';
const bot2_id = '714956864714047550';
const PREFIX = '.';
const help_message = `
.help to display this message
.test to see if the bot is working
.ping to pong
.date to display the current date & time
.rules to display how .rps works
.gamble to gamble
.rps to play rock, paper, scissors
.rock & .paper. & scissors to play the text version of rock, paper, scissors
`;

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()+" UTC";
var date_time = date+' '+time;
var update_deployed = 'The bot is now online. Updates may have been deployed.'+' '+date_time

bot.on('ready', () => {
    console.log('Bot is online.');
    bot.channels.cache.get(rps_server_gen_channel).send(update_deployed);
})

bot.on("message", (message) => {
   if (messageResponses[message.content]){
       message.channel.send(messageResponses[message.content]);
   }
})

bot.on("message", (message) => {
    if (message.author.id == bot1_id || message.author.id == bot2_id || message.content == ""){
        return;
    }
    else{
        if (message.content.startsWith(PREFIX)){
            let args = message. content.split(PREFIX);
            switch(args[1]){
                case 'test':
                    message.reply('Systems functioning.')
                    break;
                case 'ping':
                    message.reply('pong.');
                    break;
                case 'help':
                case 'h':
                    message.reply("```"+help_message+"```");
                    break;
                case 'gamble':
                    var random_gamble_number = Math.floor(Math.random()*100)+1;
                    if(random_gamble_number >= 55){
                        message.reply('You win! You rolled '+random_gamble_number);
                    }
                    if(random_gamble_number <= 54){
                        message.reply('You lose! You rolled a '+random_gamble_number);
                    }
                    break;
                case 'date':
                case 'd':
                    var today2 = new Date();
                    var date2 = today2.getFullYear()+'-'+(today2.getMonth()+1)+'-'+today2.getDate();
                    var time2 = today2.getHours()+":"+today2.getMinutes()+":"+today2.getSeconds()+" UTC";
                    var date_time2 = date2+' '+time2;
                    message.reply(date_time2);
                    break;
                case 'rules':
                    message.reply('`0=rock`, `1=paper`, `2=scissors`. Rock > Scissors > Paper > Rock');
                    break;
                case 'rps':
                case 'game':
                case 'play':
                    message.reply('Lets play rock, paper, scissors! Choose an emoji.').then(messageReaction => {
                        messageReaction.react("✊");
                        messageReaction.react("🖐️");
                        messageReaction.react("✌️");
                    })
                    message.channel.send("Not fully functional. Currently being developed. Instead type: `.rock`, `.paper` or `.scissors`");
                    break;
                // TEXT BASED ROCK PAPER SCISSORS GAME BELOW
                case 'rock':
                case 'r':
                    var random_number = Math.floor(Math.random()*3);
                    if (random_number == 0){
                        message.reply('Rock! We tied!');
                    }
                    if (random_number == 1){
                        message.reply('Paper! I win!');
                    }
                    if (random_number == 2){
                        message.reply('Scissors! You win!');
                    }
                    if (random_number != 0 && random_number != 1 && random_number != 2){
                        message.reply('Error. Random number (0-2) is: '+random_number);
                    }
                    break;
                case 'paper':
                case 'p':
                    var random_number = Math.floor(Math.random()*3);
                    if (random_number == 0){
                        message.reply('Rock! You win!');
                    }
                    if (random_number == 1){
                        message.reply('Paper! We tied!');
                    }
                    if (random_number == 2){
                        message.reply('Scissors! I win!');
                    }
                    if (random_number != 0 && random_number != 1 && random_number != 2){
                        message.reply('Error. Random number (0-2) is: '+random_number);
                    }
                    break;
                case 'scissors':
                case 's':
                    var random_number = Math.floor(Math.random()*3);
                    if (random_number == 0){
                        message.reply('Rock! I win!');
                    }
                    if (random_number == 1){
                        message.reply('Paper! You win!');
                    }
                    if (random_number == 2){
                        message.reply('Scissors! We tied!');
                    }
                    if (random_number != 0 && random_number != 1 && random_number != 2){
                        message.reply('Error. Random number (0-2) is: '+random_number);
                    }
                    break;
            }
        }
    }
})

//bot.login(token);
bot.login(token2);
//bot.login('enter key here when testing locally');  //use this when testing "enter key here when testing locally"