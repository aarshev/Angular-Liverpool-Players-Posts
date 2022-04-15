import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostsRoutingModule } from './posts-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PlayerPostListComponent } from './player-post-list/player-post-list.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteDummyComponent } from './delete-dummy/delete-dummy.component';



@NgModule({
  declarations: [
    CreatePostComponent,
    PostListComponent,
    PostListItemComponent,
    PlayerPostListComponent,
    UpdatePostComponent,
    UserPostsComponent,
    DeleteDummyComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PostsModule { }
