import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/core/interfaces';
import { PostService } from 'src/app/core/post.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  postList!: IPost[];

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //console.log(params)
      const userId = params['id'];
      this.postService.loadPostForUser(userId).subscribe(postList => {
        this.postList = postList;
        //console.log(this.postList)
      })
    });
  }

}
