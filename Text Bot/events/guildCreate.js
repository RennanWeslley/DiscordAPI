module.exports = (client, db, guild) => {
    console.log(`Bot entrou no server: ${guild.name} com ${guild.memberCount} membros.`);

    db.set(guild.id, []).write();

    client.user.setActivity(`Estou em ${client.guilds.size} servidores.`);
};
