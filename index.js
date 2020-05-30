const Discord = require('discord.js');
const bot = new Discord.Client();
const {message_responses} = require("./message-responses.js");
const token = process.env.token; 
const token2 = process.env.token2; //Different bot with same capabilities
const rps_server_gen_channel = '714957511123533877' //This is the channel ID from the RPS discord
const bot1_id = '714953926994296994'; //this is S's bot
const bot2_id = '714956864714047550';// this is U's bot 
const PREFIX = '.';

const fs = require('fs'); //this for files 
bot.commands = new Discord.Collection();

const command_files = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of command_files){
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

var {update_deployed} = require("./date-time.js");

//var{current_temp} = require ("./temp.js");
bot.on('ready', () => {
    console.log('Bot is online.');
    bot.channels.cache.get(rps_server_gen_channel).send(update_deployed);
})

bot.on("message", (message) => {
   if (message_responses[message.content]){
       message.channel.send(message_responses[message.content]);
   }
})

bot.on("message", (message) => {
    if (message.author.id == bot1_id || message.author.id == bot2_id || message.content == ""){
        return;
    }
    else{
        if (message.content.startsWith(PREFIX)){
            let args = message.content.split(PREFIX);
            switch(args[1]){
                case 'test':
                    message.reply('Systems functioning.')
                    break;

                case 'git':
                case 'github':
                case 'g': 
                    bot.commands.get("github").execute(message, args)
                    break;

                case 'ping':
                    bot.commands.get("ping").execute(message, args);
                    break;

                case 'help':
                case 'h':
                    bot.commands.get("help").execute(message, args);
                    break;

                case 'gamble':
                    bot.commands.get("gamble").execute(message, args);
                    break;

                case 'date':
                case 'd':
                    bot.commands.get("date").execute(message, args);
                    break;
                
                case 'temp':
                case 't':
                    bot.commands.get("weather").execute(message, args);
                    break;

                case 'rules':
                    message.reply('`0=rock`, `1=paper`, `2=scissors`. Rock > Scissors > Paper > Rock');
                    break;

                case 'rps':
                case 'game':
                case 'play':
                    bot.commands.get("rps").execute(message, args);
                    break;

                // TEXT BASED ROCK PAPER SCISSORS GAME BELOW
                case 'rock':
                case 'r':
                case 'R':
                    bot.commands.get("rps text rock").execute(message, args);
                    break;

                case 'paper':
                case 'p':
                case 'P':
                    bot.commands.get("rps text paper").execute(message, args);
                    break;

                case 'scissors':
                case 's':
                case 'S':
                    bot.commands.get("rps text scissors").execute(message, args);
                    break;
            }
        }
    }
})

//bot.login(token);
//bot.login(token2);

//LOCAL TEST
//DONT FORGET TO DELETE KEY BEFORE PUBLISHING

const local_login = '';
bot.login(local_login);  //use this when testing "enter key here when testing locally"