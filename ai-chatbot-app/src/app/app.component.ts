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
  title = 'ai-chatbot-app';

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

// Function to get the prompt from the user and send it to the ai.service.ts to get the response from the chatbot
async function submitPrompt() {

  let input: ChatCompletionMessageParam = { role: 'user', content: prompt };
  prompt = '';

  // generates the chatbot's response.
  await getResponse(input);

  
  // Scroll to keep the messages in view.
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

// function that modifies the effects the enter key has on the text area.
async function enterKey(e: KeyboardEvent) {

  // if Shift + Enter create a new line.
  if (e.key === 'Enter' && e.shiftKey) {

    e.preventDefault();
    prompt += '\n';
    
  } else if (e.key === 'Enter') {         // Else if just enter is pressed then submit the prompt.

    e.preventDefault();

    // Makes sure the user isn't rapid-submitting prompts.
    if (canSubmit) {

      canSubmit = false;
      await submitPrompt();
      canSubmit = true;

    }

  }
}
