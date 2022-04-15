import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth.guard";
import { CreatePostComponent } from "./create-post/create-post.component";
import { DeleteDummyComponent } from "./delete-dummy/delete-dummy.component";
import { PlayerPostListComponent } from "./player-post-list/player-post-list.component";
import { PostListComponent } from "./post-list/post-list.component";
import { UpdatePostComponent } from "./update-post/update-post.component";
import { UserPostsComponent } from "./user-posts/user-posts.component";


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: PostListComponent
    },{
        path: 'deletedDummy', 
        component: DeleteDummyComponent,
    },{
        path: 'create',
        canActivate: [AuthGuard],
        component: CreatePostComponent
    },{
        path: 'update/:id',
        canActivate: [AuthGuard],
        component: UpdatePostComponent
    },{
        path: 'profile/:id',
        canActivate: [AuthGuard],
        component: UserPostsComponent
    },{
        path: ':id',
        component: PlayerPostListComponent
    }
];

export const PostsRoutingModule = RouterModule.forChild(routes);