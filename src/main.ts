import { Whatsapp, create } from "venom-bot";
import {chatGPT} from "./services/chatGpt"


create('sales').then((client) => start(client))
  .catch((error)=> console.log(error));

function start(client: Whatsapp) {
  console.log('Bot iniciado!');

  client.onMessage(async (message) => {
    const { body, from, type } = message;
    console.log(`Mensagem recebida de ${from}: ${body}`);

    if (type !== 'chat' || body.length < 1) {
      return;
    }

    if (body === '!help') {
      const response = 'Digite qualquer mensagem e eu irei respondê-la.';
      await client.sendText(from, response);
      console.log(`Mensagem enviada para ${from}: ${response}`);
      return;
    }

    const response = await chatGPT(body);

    try {
      await client.sendText(from, response);
      console.log(`Mensagem enviada para ${from}: ${response}`);
    } catch (error:any) {
      console.error(`Erro ao enviar mensagem para ${from}: ${error.message}`);
       await client.sendText(from, 'Desculpe, houve um erro ao enviar a mensagem.');
    }
  });
}

