module.exports = (client, db, guild) => {
    console.log(`Bot foi removido do servidor ${guild.name}.`);
    
    db.unset(guild.id).write();

    client.user.setActivity(`Estou em ${client.guilds.size} servidores.`);
};
