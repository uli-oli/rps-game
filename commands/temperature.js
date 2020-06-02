const PREFIX = '.';
const Discord = require('discord.js');
var weather = require('weather-js');

module.exports ={
    name: "weather",
    description: "Command to search for weather",
    execute(message, args){
        //message.channel.send("Weather test message.");
        let weather_message = message.content.toUpperCase();
        let sender = message.author;
        let cont = message.content.slice(PREFIX.length).split(" ");
        //let args = cont.slice(1)
        //message.content.slice(PREFIX.length).split(" ").slice(1)
        var result;

        weather.find({search: args.join(" "), degreeType: "F"}, function(error, result){
            if (error){
                console.log(error);
                message.channel.send(error);
                return message.channel.send(error);
            }
            if (!args[0]){
                console.log("No location set");
                return message.channel.send("Please specify a location");
            }
            if (result == undefined || result.length == 0){
                console.log("Invalid location");
                return message.channel.send("Invalid location");
            }
            else {
                console.log("Else branch chosen");
                console.log(message);
            }

            var current = result[0].current;
            var location = result[0].location;
            const weather_info = new Discord.MessageEmbed()
            //const weather_info = new Discord.RichEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Weather forecast for ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor(0x00AE86) //choose a color
                .addField('Timezone', `UTC${location.timezone}`, true) // This is the first field, it shows the timezone, and the true means `inline`, you can read more about this on the official discord.js documentation
                .addField('Degree Type', location.degreetype, true)// This is the field that shows the degree type, and is inline
                .addField('Temperature', `${current.temperature}°`, true)
                .addField('Feels Like', `${current.feelslike}°`, true)
                .addField('Winds', current.winddisplay, true)
                .addField('Humidity', `${current.humidity}%`, true);

                message.channel.send({weather_info});
                message.reply(weather_info);
                console.log({weather_info});
        });
        //message.channel.send(JSON.stringify(result[0].current, null, 2)); });
    }
}