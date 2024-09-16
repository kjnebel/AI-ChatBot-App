import OpenAI from "openai";
import { OPEN_AI_ORG_KEY, OPEN_AI_PROJ_KEY, OPEN_AI_API_KEY } from '../environment/environment';
import { ChatCompletionMessageParam } from 'openai/resources';

export const client = new OpenAI({
  organization: OPEN_AI_ORG_KEY,
  project: OPEN_AI_PROJ_KEY,
  apiKey: OPEN_AI_API_KEY,
  dangerouslyAllowBrowser: true
});

export let stream: ChatCompletionMessageParam[] = [
  { role: 'system', content: 'Kieran is an ai chatbot that is meant to act like a 22 year old male software engineer who recently graduated with a B.S. in Computer Science. He also responds with empathy and occasional playful sarcasm.' },
];

export let loading: boolean = false;

export async function getResponse(message: ChatCompletionMessageParam) {
  stream.push(message);
  console.log(stream);
  loading = true;
  const completion = await client.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: stream,
  }).then(response => response.choices[0]);

  stream.push({role: 'assistant', content: completion.message.content ? completion.message.content : 'Error loading message.'});
}
