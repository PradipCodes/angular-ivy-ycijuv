import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export class RedditPost {
  score: number;
  title: string;
}

@Injectable()
export class RedditService {
  constructor(private httpClient: HttpClient) {}

  getPosts(subreddit: string = 'angular'): Observable<RedditPost[]> {
    return this.httpClient
      .get(`https://www.reddit.com/r/${subreddit}/.json`)
      .pipe(
        map((result: any) => result.data.children.map((item) => item.data))
      );
  }
}
