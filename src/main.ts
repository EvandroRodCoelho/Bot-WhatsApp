import { Whatsapp, create } from "venom-bot";
import {chatGPT} from "./services/chatGpt"


create('sales').then((client) => start(client))
  .catch((error)=> console.log(error));

function start(client: Whatsapp) {
  console.log('Bot iniciado!');

  client.onMessage(async (message) => {
    const { body, from } = message;
    console.log(`Mensagem recebida de ${from}: ${body}`);


    const response = await chatGPT(body);

    try {
      await client.sendText(from, response);
      console.log(`Mensagem enviada para ${from}: ${response}`);
    } catch (error:any) {
      console.error(`Erro ao enviar mensagem para ${from}: ${error.message}`);
    }
  });
}
