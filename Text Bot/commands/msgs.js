exports.run = (client, message, args, db) => {
    let m = db.get(message.guild.id).filter("msg").value();

    if(JSON.stringify(m) === '[]') return message.reply("nenhuma mensagem adicionada :/ Use !addmsg para adicionar mensagens aleatórias ;)");
    
    let n = "";

    for(let i = 0; m[i]; n += "\"" + m[i++].msg + "\"\n");

    message.channel.send("Mensagens aleatórias:\n" + n);
};
