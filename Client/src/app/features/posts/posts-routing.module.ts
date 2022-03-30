import { RouterModule, Routes } from "@angular/router";
import { CreatePostComponent } from "./create-post/create-post.component";
import { PostListComponent } from "./post-list/post-list.component";


const routes: Routes = [
    {
        path: 'posts',
        pathMatch: 'full',
        component: PostListComponent
    },{
        path: 'posts/create',
        component: CreatePostComponent
    },
];

export const PostsRoutingModule = RouterModule.forChild(routes);