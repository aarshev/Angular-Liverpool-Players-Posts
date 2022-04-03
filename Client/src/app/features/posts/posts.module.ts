import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostsRoutingModule } from './posts-routing.module';
import { FormsModule } from '@angular/forms';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PlayerPostListComponent } from './player-post-list/player-post-list.component';



@NgModule({
  declarations: [
    CreatePostComponent,
    PostListComponent,
    PostListItemComponent,
    PlayerPostListComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule
  ]
})
export class PostsModule { }
