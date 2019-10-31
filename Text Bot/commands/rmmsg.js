exports.run = (client, message, args, db) => {
    let m = db.get(message.guild.id).filter("msg").value();

    if(JSON.stringify(m) === '[]') return message.reply("nenhuma mensagem adicionada :/ Use #addmsg para adicionar mensagens aleatórias ;)");
    
    m = "";

    for(let i = 1; args[i]; m += args[i++] + " ");
    
    db.get(message.guild.id).remove({msg: m.trim()}).write();

    return message.channel.send("A mensagem \"" + m.trim() + "\" foi removida.");
};
