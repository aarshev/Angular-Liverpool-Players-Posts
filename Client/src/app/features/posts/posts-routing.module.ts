import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth.guard";
import { CreatePostComponent } from "./create-post/create-post.component";
import { PlayerPostListComponent } from "./player-post-list/player-post-list.component";
import { PostListComponent } from "./post-list/post-list.component";
import { UpdatePostComponent } from "./update-post/update-post.component";


const routes: Routes = [
    {
        path: 'posts',
        pathMatch: 'full',
        component: PostListComponent
    },{
        path: 'posts/create',
        canActivate: [AuthGuard],
        pathMatch: 'full',
        component: CreatePostComponent
    },{
        path: 'posts/:id',
        component: PlayerPostListComponent
    },{
        path: 'update/:id',
        canActivate: [AuthGuard],
        component: UpdatePostComponent
    }
];

export const PostsRoutingModule = RouterModule.forChild(routes);