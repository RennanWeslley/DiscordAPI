exports.run = (client, message, args, db) => {
    let m = db.get(message.guild.id).filter("msg").value();

    if(JSON.stringify(m) === '[]') return message.reply("nenhuma mensagem setada :/ Use #addmsg para adicionar mensagens aleatórias ;)");
    
    m = db.get(message.guild.id).value();
    let i = m.length;

    while(i--) 
        if(m[i].msg) 
            break;
    
    let n = m[i].msg;

    db.get(message.guild.id).remove({msg: n}).write();

    return message.channel.send("A mensagem \"" + n + "\" foi removida.");
};
