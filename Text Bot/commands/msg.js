exports.run = (client, message, args, db) => {
    let n = db.get(message.guild.id).filter("msg").value();

    if(JSON.stringify(n) === '[]') return message.reply("nenhuma mensagem adicionada :/ Use #addmsg para adicionar mensagens aleatórias ;)");

    message.channel.lastMessage.delete();

    return message.channel.send(n[Math.floor(Math.random() * n.length)].msg);
};
