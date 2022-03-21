import { RouterModule, Routes } from "@angular/router";
import { CreatePostComponent } from "./create-post/create-post.component";


const routes: Routes = [
    {
        path: 'posts/create',
        component: CreatePostComponent
    },
];

export const PostsRoutingModule = RouterModule.forChild(routes);