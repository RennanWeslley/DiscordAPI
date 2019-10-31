exports.run = (client, message, args, db) => {
    if(!args[1]) return message.reply("o usuário não foi definido :/"); 

    let m = db.get(message.guild.id).filter("id").value();

    if(JSON.stringify(m) === '[]') return message.reply("nenhuma mensagem setada :/ Use #addusermsg para adicionar mensagens ao usuário ;)");
    
    let user = args[1].substring(2, (args[1].length - 1));
    let offuser = user.substring(1);

    let onlineMembers = message.guild.members.filter(member => member.presence.status === "online");
    let offlineMembers = message.guild.members.filter(member => member.presence.status === "offline");

    if(!onlineMembers.has(user)) {
        if(!offlineMembers.has(offuser))
            return message.reply("usuário inválido. Utilize o @ para marcar o usuário.");

        user = offuser;
    }

    m = db.get(message.guild.id).value();
    let i = m.length;

    while(i--) 
        if(m[i].id && m[i].id === user)
            break;

    let n = m[i]; 

    db.get(message.guild.id).remove({id: user, pmsg: n.pmsg, key: n.key}).write();

    return message.channel.send("A mensagem \"" + n.pmsg + "\" foi removida do usuário <@" + user + ">.");
};
