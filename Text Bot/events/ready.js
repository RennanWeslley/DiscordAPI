module.exports = async client => {
    console.log(`Bot iniciado com ${client.users.size} usuários em ${client.channels.size} canais e ${client.guilds.size} servidores.`);
    client.user.setActivity(`Estou em ${client.guilds.size} servidores.`);
};
