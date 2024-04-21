import { Component, OnInit } from '@angular/core';
import { RedditPost, RedditService } from './reddit.service';

@Component({
  selector: 'app-reddit-post',
  templateUrl: './reddit-post.component.html',
  styleUrls: ['./reddit-post.component.css'],
})
export class RedditPostComponent implements OnInit {
  posts: RedditPost[];
  totalScore = 0;

  constructor(private redditService: RedditService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts() {
    this.redditService.getPosts().subscribe((posts) => {
      this.posts = posts;
      console.log(posts);
    });
  }
}
