import { Component } from '@angular/core';
import { ChatCompletionMessageParam } from 'openai/resources';
import { getResponse, stream } from 'src/app/services/ai.service';

@Component({
  selector: 'app-chat-feed',
  templateUrl: './chat-feed.component.html',
  styleUrls: ['./chat-feed.component.css']
})
export class ChatFeedComponent {
  get chats() {
    return stream;
  }
}
