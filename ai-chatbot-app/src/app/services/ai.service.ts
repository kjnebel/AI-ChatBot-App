import OpenAI from "openai";
import { OPEN_AI_ORG_KEY, OPEN_AI_PROJ_KEY, OPEN_AI_API_KEY } from '../environment/environment';
import { ChatCompletionMessageParam } from 'openai/resources';
import { format } from "date-fns";

export const client = new OpenAI({
  organization: OPEN_AI_ORG_KEY,
  project: OPEN_AI_PROJ_KEY,
  apiKey: OPEN_AI_API_KEY,
  dangerouslyAllowBrowser: true
});

export let timestamps: string[] = ['null'];

export let stream: ChatCompletionMessageParam[] = [
  { role: 'system', content: 'Kieran is an ai chatbot that is meant to act like a 22 year old male software engineer who recently graduated with a B.S. in Computer Science. He has a girlfriend named Chanhee who he loves more than anything and he also responds with empathy and occasional playful sarcasm.' },
];

export let loading: boolean = false;

export let numOfResponse = 0;

export function setLoading(value: boolean) {
  loading = value;
}

export async function getResponse(message: ChatCompletionMessageParam) {
  stream.push(message);
  setTimeout(() => {
    let chat = document.getElementsByClassName('userChat')[numOfResponse];
    document.getElementsByTagName('ol')[0].scrollTo({
      top: document.getElementsByTagName('ol')[0].scrollHeight + chat.clientHeight + 100,
      left: 0,
      behavior: 'smooth'
    });
  }, 10);
  let date = new Date();
  timestamps.push(format(date, 'HH:mm aaa'));
  loading = true;
  try {
    const completion = await client.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: stream,
    }).then(response => response.choices[0]);
    numOfResponse++;
    let date = new Date();
    timestamps.push(format(date, 'HH:mm aaa'));
    stream.push({role: 'assistant', content: completion.message.content ? completion.message.content : 'Error loading message.'});
  } catch(err) {
    console.log(err);
    stream.push({role: 'assistant', content: 'Something went wrong! Please try again with a different prompt.'})
  }
}
