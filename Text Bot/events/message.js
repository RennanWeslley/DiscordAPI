module.exports = (client, db, message) => {
    if(message.channel.type === "dm") return;
    if(message.author.bot) return;

    const args = message.content.trim().split(/ +/g);
    const comando = args[0].toLowerCase();

    const cmd = client.commands.get(comando.slice(1));

    if (!cmd) {
        let g = db.get(message.guild.id).filter({id: message.author.id}).value();
        
        if(!(JSON.stringify(g) === '[]')) 
            for(let i = 0; g[i]; i++)
                for(let j = 0; args[j]; j++)
                    if(!g[i].key.localeCompare(args[j], undefined, { sensitivity: 'accent' })) {
                        message.channel.send(g[i].pmsg);
                        break;
                    }      
        return
    }

    cmd.run(client, message, args, db);
};
