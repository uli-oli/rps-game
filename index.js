const Discord = require('discord.js');
const bot = new Discord.Client();
const { message_responses } = require("./message-responses.js");
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
.rock & .paper. & .scissors to play the text version of rock, paper, scissors
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
                    message.reply('https://github.com/Sh-Abd/rps-game');
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
                    var game_message;
                    message.reply('Lets play rock, paper, scissors! Choose an emoji.').then(message_reaction => {
                    message_reaction.react("✊")
                    .then (() => message_reaction.react("🖐️"))
                    .then (() => message_reaction.react("✌️"))
                    .catch (() => console.error('One of the emojis failed to react.'));
                    game_message = message_reaction;
                    const filter = (reaction, user) => {
                        return (reaction.emoji.name == "✊" || reaction.emoji.name == "🖐️" || reaction.emoji.name == "✌️") && user.id == message.author.id;
                    };
                    const collector = game_message.createReactionCollector(filter, {time: 10000});
                    collector.on('collect', (reaction, user) => {
                        if (reaction.emoji.name == '✊'){
                            console.log('Reacted with rock.');
                        }
                        if (reaction.emoji.name == '🖐️'){
                            console.log('Reacted with paper.');
                        }
                        if (reaction.emoji.name == '✌️'){
                            console.log('Reacted with scissors.');
                        }
                        else{
                            console.log('No reaction.');
                        }
                        console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
                    });
                    collector.on('end', (collected) => {
                        console.log(`Collected ${collected.size} items.`);
                    });
                    })
                    message.channel.send("Not fully functional. Currently being developed. Instead type: `.rock`, `.paper` or `.scissors`");
                    break;

                // TEXT BASED ROCK PAPER SCISSORS GAME BELOW
                case 'rock':
                case 'r':
                case 'R':
                    var random_number = Math.floor(Math.random()*3);
                    if (random_number == 0){
                        message.reply('You picked rock. I picked rock. We tied!');
                    }
                    if (random_number == 1){
                        message.reply('You picked rock. I picked paper. I win!');
                    }
                    if (random_number == 2){
                        message.reply('You picked rock. I picked scissors. You win!');
                    }
                    if (random_number != 0 && random_number != 1 && random_number != 2){
                        message.reply('Error. Random number (0-2) is: '+random_number);
                    }
                    break;

                case 'paper':
                case 'p':
                case 'P':
                    var random_number = Math.floor(Math.random()*3);
                    if (random_number == 0){
                        message.reply('You picked paper. I picked rock. You win!');
                    }
                    if (random_number == 1){
                        message.reply('You picked paper. I picked paper. We tied!');
                    }
                    if (random_number == 2){
                        message.reply('You picked paper. I picked scissors. I win!');
                    }
                    if (random_number != 0 && random_number != 1 && random_number != 2){
                        message.reply('Error. Random number (0-2) is: '+random_number);
                    }
                    break;

                case 'scissors':
                case 's':
                case 'S':
                    var random_number = Math.floor(Math.random()*3);
                    if (random_number == 0){
                        message.reply('You picked scissors. I picked rock. I win!');
                    }
                    if (random_number == 1){
                        message.reply('You picked scissors. I picked paper. You win!');
                    }
                    if (random_number == 2){
                        message.reply('You picked scissors. I picked scissors. We tied!');
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
//bot.login(token2);

//LOCAL TEST
//DONT FORGET TO DELETE KEY BEFORE PUBLISHING

const local_login = '';
bot.login(local_login);  //use this when testing "enter key here when testing locally"