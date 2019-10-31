exports.run = (client, message) => {
    return message.channel.send("#ping - Mostra a latência do servidor e da API.\n" +
                                "#addMsg Msg - Adiciona uma mensagem aleatória.\n"  +
                                "#setName Name - Muda o nome do bot\n"              +
                                "#addUserMsg User Keyword Msg - Adiciona uma mensagem à um usuário (bot responderá caso a palavra-chave esteja contida na mensagem).\n" +
                                "#msgs  - Lista todas as mensagens aleatórias registradas e seus índices.\n" +
                                "#userMsgs User - Lista as mensagens relacionadas ao usuário e suas palavras-chave.\n" +
                                "#say Msg - Faz o bot repetir a mensagem (Comando geralmente usado em testes).\n" + 
                                "#msg - Gera uma mensagem aleatória.\n" +
                                "#rmPop - Remove a última mensagem aleatória adicionada.\n" +
                                "#rmMsg Msg - Remove uma mensagem aleatória.\n" +
                                "rmUserPop User - Remove a última mensagem adicionada ao usuário.\n" +
                                "rmUserMsg User Keyword - Remove a mensagem do usuário relacionada à palavra-chave.\n");
};
