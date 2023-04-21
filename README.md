<h1 align='center'>Bot-WhatsApp</h1>
<p align='center'>
  <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>

* [Descrição](#Descrição)
* [Pré-requisitos](#Pre-Requisitos)
* [Instalação](#Instalação)
* [Uso](#Uso)
* [Tecnologias Utilizadas](#Tecnologias-utilizadas)

## Descrição

<p>Este projeto tem como objetivo criar um bot para WhatsApp, o bot é criado com Node.js + Typescript , utilizando a biblioteca "venom-bot"</p>

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) versão 12 ou superior
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)

Também precisara obter uma chave API do OpenAI. Para fazer isso, siga estas etapas:

1. Crie uma conta no site da [OpenAI](https://beta.openai.com/signup/).
2. Após criar uma conta, crie uma nova chave de API na [página de configurações](https://beta.openai.com/account/api-keys).
3. Copie a chave de API gerada.

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:
 ``` 
 git clone https://github.com/EvandroRodCoelho/Bot-WhatsApp.git
 ```
 ```
 cd Bot-Whatspp
 ```
 ```
 npm install
 ```
O projeto utiliza um arquivo `.env` para armazenar variáveis de ambiente.Por isso siga esses passos:

1. No arquivo `.example.env` e renomeie-o para `.env`.
2. Substitua `Your_Api_key` pela sua chave da API do OpenAI.
3. Salve o arquivo `.env` e feche-o.

## Uso

### Iniciando o projeto

Para iniciar o projeto, execute o seguinte comando:

```
npm run start
```


Ao executar este comando, um código QR será exibido no terminal. Abra o aplicativo WhatsApp no seu telefone e escaneie o código QR para conectar o seu telefone ao bot.

### Enviando mensagens ao bot

Depois de conectar seu telefone ao bot, você pode enviar mensagens para o bot pelo WhatsApp. Qualquer mensagem recebida será enviada para o modelo de linguagem natural OpenAI GPT-3 para ser processada e respondida. A resposta do bot será enviada de volta para o número de telefone que enviou a mensagem.

## Exemplo

Aqui está um exemplo de como usar o bot no WhatsApp:

1. Execute o comando `npm run start` para iniciar o bot.
2. Abra o aplicativo WhatsApp em seu telefone e escaneie o código QR exibido no terminal.
3. Envie uma mensagem para o número de telefone do bot.
4. Espere alguns segundos para a resposta do bot.
5. O bot enviará sua resposta para o número de telefone que enviou a mensagem.

Certifique-se de ter preenchido as variáveis de ambiente corretamente antes de executar o comando `npm run start`.

É importante lembrar que a chave de API do OpenAI pode expirar ou ficar inválida com o tempo. Caso ocorra algum erro na resposta do bot, verifique se a chave ainda está válida e, se necessário, gere uma nova chave na página de configurações da OpenAI.

Se você tiver algum problema para usar o bot, verifique se atendeu a todos os pré-requisitos mencionados no arquivo `README.md`. Se ainda tiver problemas, entre em contato com o criador para resolver a questão.


## Tecnologias utilizadas
<p align="left"> 
  <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> 
  </a>
  <a href="https://nodejs.org" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> 
  </a> 
</p>
