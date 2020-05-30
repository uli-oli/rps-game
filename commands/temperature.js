module.exports ={
    name: "weather",
    description: "Command to search for weather",
    execute(message, args){
        message.channel.send("Weather test message.");

        const weather = require('weather-js')
        let weather_message = message.content.toUpperCase();
        let sender = message.author;
        let cont = message.content.slice(PREFIX.length).split(" ");
        let args2 = cont.slice(1)

        weather.find({search: args2.join(" "), degreeType: "F"}, function(err, result){
            if (err){
                message.channel.send(err);
            }
            if (result.length == 0){
                message.channel.send("**Please enter a valid location.**");
                return;
            }
            var current = result [0].current;
            var location = result[0].locatio
            const embed = new Discord.RichEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Weather condutions for ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor(0x00AE86)
                .addField('Timezone',`UTC${location.timezone}`, true) // This is the first field, it shows the timezone, and the true means `inline`, you can read more about this on the official discord.js documentation
                .addField('Degree Type',location.degreetype, true)// This is the field that shows the degree type, and is inline
                .addField('Temperature',`${current.temperature} Degrees`, true)
                .addField('Feels Like', `${current.feelslike} Degrees`, true)
                .addField('Winds',current.winddisplay, true)
                .addField('Humidity', `${current.humidity}%`, true)
                message.channel.send({embed});
                console.log({embed});
        });
        //message.channel.send(JSON.stringify(result[0].current, null, 2)); });
    }
}