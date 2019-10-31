exports.run = (client, message, args, db) => {
    if(!args[1]) return message.reply("o usuário não foi definido :/");
    if(!args[2]) return message.reply("a palavra-chave não foi definida :/");

    let user = args[1].substring(2, (args[1].length - 1));
    let offuser = user.substring(1);

    let onlineMembers = message.guild.members.filter(member => member.presence.status === "online");
    let offlineMembers = message.guild.members.filter(member => member.presence.status === "offline");

    if(!onlineMembers.has(user)) {
        if(!offlineMembers.has(offuser))
            return message.reply("usuário inválido. Utilize o @ para marcar o usuário.");

        user = offuser;
    }

    if(!db.get(message.guild.id).find({id: user,key: args[2]}).value())
        return message.reply("usuário ou palavra-chave não encontrada.");

    let m = db.get(message.guild.id).find({id: user, key: args[2]}).value();

    db.get(message.guild.id).remove({id: user, pmsg: m.pmsg, key: args[2]}).write();

    return message.channel.send("A mensagem \"" + m.pmsg + "\" foi removida do usuário <@" + m.id + ">.");
};
