import { Component, OnInit } from '@angular/core';
import { Post } from '.././post.model';
import { PostService } from '../post.service';
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { POSTS } from './../mock-posts';

@Component({
  selector: 'app-delores',
  templateUrl: './delores.component.html',
  styleUrls: ['./delores.component.css'],
  providers: [PostService]
})

export class DeloresComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService, private location: Location) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();

  }


}
