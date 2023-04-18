import {Whatsapp , create} from "venom-bot";
import axios from 'axios';
import { Configuration, OpenAIApi } from "openai";

const API_URL = 'https://api.openai.com/v1/chat/completions';


const configuration = new Configuration({
  apiKey: API_KEY
});
const openai = new OpenAIApi(configuration);

async function chatGPT() {
 const response = openai.createEdit({
    model: "text-davinci-edit-001",
    input: "O que é Css?",
   instruction: "Em português",

  });

  const choices = (await response).data.choices;
  const answer = choices[0].text;
  return answer;
}

chatGPT().then((answer) => {
  console.log(answer);
});



// let pergunta: boolean = false;

// create('sales').then((client) => start(client));

//  function  start(client:Whatsapp) {
//      client.onMessage((message) => {
        
         
//          if (pergunta) {
//             client.sendText(message.from, "Resposta")
//                 .then(_ => pergunta == false)
//                  .catch(err => console.error(err))
//              return;
//          }
//          if (message.body == "0") {
//              return;
//          }
         
//         if(message.body == "1"){
//             client.sendText(message.from, "Faça sua pergunta")
//                 .then(result => pergunta == true)
//                 .catch(err => console.error(err))
//              return;
//          }

//          client.sendText(message.from, "Olá sou a inteligencia artificial, veja as opções:\n 0-Sair \n1-fazer uma pergunta")
//              .then(result => console.log(message.body))
//              .catch(err => console.error(err))
                   
//     })
// }  

