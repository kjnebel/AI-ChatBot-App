import { Component } from '@angular/core';
import { getResponse } from './services/ai.service';
import { ChatCompletionMessageParam } from 'openai/resources';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  prompt: string = '';

  async ngOnInit() {
    // const value = await getResponse(message);
  }

  submitPrompt() {
    let input: ChatCompletionMessageParam = { role: 'user', content: this.prompt };
    console.log(input);
    getResponse(input);
  }
}
