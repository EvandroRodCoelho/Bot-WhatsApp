import {Whatsapp , create} from "venom-bot";


create('sales').then((client) => start(client));

 function  start(client:Whatsapp) {
     client.onMessage((message) => {
            if(message.body == 'Oi' || message.body ||'ola'){
                client.sendText(message.from, 'Olá tudo bem com vc?')
                    .then(result => console.log(result))
                    .catch(err => console.error(err));
            }
    })
}  
