exports.run = (client, message, args, db) => {
    if(!args[1]) return message.reply("o usuário não foi definido :/");

    let user = args[1].substring(2, (args[1].length - 1));
    let offuser = user.substring(1);

    let onlineMembers = message.guild.members.filter(member => member.presence.status === "online");
    let offlineMembers = message.guild.members.filter(member => member.presence.status === "offline");

    if(!onlineMembers.has(user)) {
        if(!offlineMembers.has(offuser))
            return message.reply("usuário inválido. Utilize o @ para marcar o usuário.");

        user = offuser;
    }

    let n = db.get(message.guild.id).filter({id: user}).value();

    if(JSON.stringify(n) === '[]')
        return message.reply("usuário ainda sem mensagens cadastradas :/ Use #addusermsg para adicionar mensagens especiais ;)")

    message.channel.send("Mensagens do usuário:\n");

    for(let i = 0, m; n[i]; i++) 
        message.channel.send("\"" + n[i].pmsg + "\""   + 
                             " com a palavra-chave "   + n[i].key + ".\n");

    return message.channel.send("FIM.");
};
