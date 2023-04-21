import { Configuration, OpenAIApi } from "openai";
const API_URL = 'https://api.openai.com/v1/chat/completions';

require('dotenv').config();

const configuration = new Configuration({
  // apiKey:"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",
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function chatGPT(text: string): Promise<string>  {
  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: text,
    max_tokens: 60,
    n: 1,
    temperature: 0.5,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const choices = response?.data?.choices;
  const answer = choices ? choices[0].text : '';
  return answer || "Erro"  ;
}
