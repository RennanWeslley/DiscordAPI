const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
client.config = config;

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

const Enmap = require("enmap");
const fs = require("fs");

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);

    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];

        client.on(eventName, event.bind(null, client, db));
    });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);

    files.forEach(file => {
        if (!file.endsWith(".js")) return;

        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        
        client.commands.set(commandName, props);
    });
});

client.login(config.token);
