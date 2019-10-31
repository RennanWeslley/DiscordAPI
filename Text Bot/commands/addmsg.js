exports.run = (client, message, args, db) => {
    if(!args[1]) return message.reply("a mensagem não foi definida :/");

    let m = "";

    for(let i = 1; args[i]; m += args[i++] + " ");

    if(!db.get(message.guild.id).find({msg: m.trim()}).value())
        db.get(message.guild.id).push({msg: m.trim()})
            .write();
    else
        return message.reply("a mensagem já está cadastrada.");

    return message.channel.send("\"" + m.trim() + "\" foi adicionada às mensagens aleatórias.");
};
