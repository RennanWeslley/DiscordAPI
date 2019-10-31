exports.run = (client, message, args, db) => {
    if(!args[1]) return message.reply("o usuário não foi definido :/");
    if(!args[2]) return message.reply("a palavra-chave não foi definida :/");
    if(!args[3]) return message.reply("a mensagem não foi definida :/");

    let user = args[1].substring(2, (args[1].length - 1));
    let offuser = user.substring(1);

    let onlineMembers = message.guild.members.filter(member => member.presence.status === "online");
    let offlineMembers = message.guild.members.filter(member => member.presence.status === "offline");

    if(!onlineMembers.has(user)) {
        if(!offlineMembers.has(offuser))
            return message.reply("usuário inválido. Utilize o @ para marcar o usuário.");

        user = offuser;
    }

    let m = "";

    for(let j = 3; args[j]; m += args[j++] + " ");

    if(!db.get(message.guild.id).find({id: user, key: args[2]}).value()) {
        db.get(message.guild.id).push({
            id: user,
            pmsg: m.trim(),
            key: args[2]
        }).write();

        return message.channel.send("A mensagem \"" + m.trim() + "\" foi adicionada ao usuário " + args[1] + " com a palavra-chave " + args[2] + ".");
    }
    else return message.reply("usuário já possui uma messagem cadastrada à palavra-chave \"" + args[2] + "\"." );
};
