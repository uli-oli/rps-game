module.exports = {
    name: "rps text scissors",
    description: "text based rps game. scissors",
    execute (message, args){
        var random_number = Math.floor(Math.random()*3);
        if (random_number == 0){
            message.reply('You picked scissors. I picked rock. I win!');
        }
        else if (random_number == 1){
            message.reply('You picked scissors. I picked paper. You win!');
        }
        else if (random_number == 2){
            message.reply('You picked scissors. I picked scissors. We tied!');
        }
        else if (random_number != 0 && random_number != 1 && random_number != 2){
            message.reply('Error. Random number (0-2) is: '+random_number);
        }
    }
}