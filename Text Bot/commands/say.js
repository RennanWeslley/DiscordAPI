exports.run = (client, message, args) => {
    if(!args[1]) return message.reply("a mensagem não foi definida :/");

    let m = "";

    for(let i = 1; args[i]; m += args[i++] + " ");

    message.channel.lastMessage.delete();
    
    return message.channel.send(m.trim());
};
