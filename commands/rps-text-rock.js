module.exports = {
    name: "rps text rock",
    description: "text based rps game. rock",
    execute (message, args){
        let random_number = Math.floor(Math.random()*3);
        if(random_number == 0){
            message.reply('You picked rock. I picked rock. We tied!');
        }
        else if(random_number == 1){
            message.reply('You picked rock. I picked paper. I win!');
        }
        else if(random_number == 2){
            message.reply('You picked rock. I picked scissors. You win!');
        }
        else if(random_number != 0 && random_number != 1 && random_number != 2){
            message.reply('Error. Random number (0-2) is: '+random_number);
        }
    }
}