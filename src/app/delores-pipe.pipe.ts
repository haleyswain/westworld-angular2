import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post.model';

@Pipe({
  name: 'deloresPipe',
  pure: false
})
export class DeloresPipePipe implements PipeTransform {
  transform(input: Post[]){
    var output: Post[] = [];
    for (var i = 0; i < input.length; i++) {
      if(input[i].character === "Delores") {
        output.push(input[i]);
      }
    }

  return output;

  }
}
