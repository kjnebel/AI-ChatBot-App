import { Component, ElementRef } from '@angular/core';
import { getResponse, numOfResponse, setLoading } from './services/ai.service';
import { ChatCompletionMessageParam } from 'openai/resources';

let prompt: string = '';
let canSubmit: boolean = true;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private elementRef: ElementRef) {}

  get prompt() {
    return prompt;
  }

  set prompt(value: string) {
    prompt = value;
  }

  submitPrompt() {
    submitPrompt()
  }

  ngOnInit() {
    this.elementRef.nativeElement.querySelector('#input').addEventListener('keydown', (e: KeyboardEvent) => enterKey(e));
  }

}

async function submitPrompt() {
  let input: ChatCompletionMessageParam = { role: 'user', content: prompt };
  prompt = '';
  await getResponse(input);
  setTimeout(() => {
    let chat = document.getElementsByClassName('assistantChat')[numOfResponse - 1];
    if(chat) {
      document.getElementsByTagName('ol')[0].scrollTo({
        top: document.getElementsByTagName('ol')[0].scrollHeight + chat.clientHeight,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, 1000);
  setLoading(false);
}

function enterKey(e: KeyboardEvent) {
  if (e.key === 'Enter' && e.shiftKey) {
    e.preventDefault();
    prompt += '\n';
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (canSubmit) {
      canSubmit = false;
      submitPrompt();
      canSubmit = true;
    }
  }
}
