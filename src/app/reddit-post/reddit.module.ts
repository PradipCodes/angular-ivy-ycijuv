import { NgModule } from '@angular/core';

import { RedditPostComponent } from './reddit-post.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RedditService } from './reddit.service';

@NgModule({
  imports: [HttpClientModule, CommonModule],
  declarations: [RedditPostComponent],
  exports: [RedditPostComponent],
})
export class RedditModule {}
