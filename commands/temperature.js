const PREFIX = '.';
const Discord = require('discord.js');
var weather = require('weather-js');

module.exports ={
    name: "weather",
    description: "Command to search for weather",
    execute(message, args){
        //message.channel.send("Weather test message.");
        let weather_message = message.content.toUpperCase();
        //console.log("Message content: '" + message.content + "'");
        weather.find({search: args.join(" "), degreeType: "F"}, function(error, result){
            //console.log(weather.find);
            if (error){
                console.log(error);
                message.channel.send(error);
                return message.channel.send(error);
            }
            if (!args[0]){
                console.log(args);
                console.log("No location set");
                return message.reply("Please specify a location");
            }
            if (result == undefined || result.length == 0){
                console.log("Invalid location");
                return message.reply("Invalid location");
            }
            /*
            else {
                console.log("Else branch chosen");
                console.log(message.content + " from " + message.author.username + "#" + message.author.discriminator);
            }
            */

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
                if (error){
                    console.log("error: " + error);
                    //console.log({weather_info});
                }
                //message.channel.send(weather_info);
                message.reply(weather_info);
        });
        //message.channel.send(JSON.stringify(result[0].current, null, 2)); });
    }
}