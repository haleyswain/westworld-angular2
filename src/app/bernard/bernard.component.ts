import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Post } from './../post.model';
import { POSTS } from './../mock-posts';

@Component({
  selector: 'app-bernard',
  templateUrl: './bernard.component.html',
  styleUrls: ['./bernard.component.css']
})

export class BernardComponent {
  @Input() masterPostList: Post[];

  bernardBabies() {
    console.log(this.masterPostList);
  }


}
