import { Component } from '@angular/core';
import { Post } from './post.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Westworld Forum!';

  masterPostList : Post[] = [
    new Post("Delores new outfit? What's the deal?", "I like it.", "Delores"),
    new Post("Who else wants to have a drink with Maeve?", "Me!", "Maeve"),
    new Post("Did Ford know he was going to be shot? (spoiler alert)", "It's hard to say.", "Ford"),
    new Post("Is Bernard a hostess?","cupcake","Bernard")
  ];
}
