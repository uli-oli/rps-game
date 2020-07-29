module.exports = {
    name: "rps text paper",
    description: "text based rps game. paper",
    execute (message, args){
        let random_number = Math.floor(Math.random()*3);
        if(random_number == 0){
            message.reply('You picked paper. I picked rock. You win!');
        }
        else if(random_number == 1){
            message.reply('You picked paper. I picked paper. We tied!');
        }
        else if(random_number == 2){
            message.reply('You picked paper. I picked scissors. I win!');
        }
        else if(random_number != 0 && random_number != 1 && random_number != 2){
            message.reply('Error. Random number (0-2) is: '+random_number);
        }
    }
}