exports.run = (client, message, args) => {
    client.user.setUsername(args[1]);

    return message.channel.send("Agora me chamo " + args[1] + "!");
};
