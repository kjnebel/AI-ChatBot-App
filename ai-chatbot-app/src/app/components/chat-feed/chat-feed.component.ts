import { Component } from '@angular/core';
import { ChatCompletionMessageParam } from 'openai/resources';
import { getResponse, stream, timestamps, loading } from 'src/app/services/ai.service';

@Component({
  selector: 'app-chat-feed',
  templateUrl: './chat-feed.component.html',
  styleUrls: ['./chat-feed.component.css']
})
export class ChatFeedComponent {
  get chats() {
    return stream;
  }

  get timestamps() {
    return timestamps;
  }

  get loading() {
    return loading;
  }
}
