exports.run = async (client, message) => {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! A latência é de ${m.createdTimestamp - message.createdTimestamp}ms. Latência da API de ${Math.round(client.ping)}ms.`);
};
