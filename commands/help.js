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

module.exports = {
    name: "help",
    description: "Contains the help command and the variables required",
    execute (message, args){
        message.reply("```"+help_message+"```");
    }
}