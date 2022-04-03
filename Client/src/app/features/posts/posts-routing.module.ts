import { RouterModule, Routes } from "@angular/router";
import { CreatePostComponent } from "./create-post/create-post.component";
import { PlayerPostListComponent } from "./player-post-list/player-post-list.component";
import { PostListComponent } from "./post-list/post-list.component";


const routes: Routes = [
    {
        path: 'posts',
        pathMatch: 'full',
        component: PostListComponent
    },{
        path: 'posts/create',
        pathMatch: 'full',
        component: CreatePostComponent
    },{
        path: 'posts/:id',
        component: PlayerPostListComponent
    }
];

export const PostsRoutingModule = RouterModule.forChild(routes);