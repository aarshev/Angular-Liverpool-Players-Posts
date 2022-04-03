import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/core/interfaces';
import { PostService } from 'src/app/core/post.service';

@Component({
  selector: 'app-player-post-list',
  templateUrl: './player-post-list.component.html',
  styleUrls: ['./player-post-list.component.css']
})
export class PlayerPostListComponent implements OnInit {

  postList!: IPost[];

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      const playerId = params['id'];
      this.postService.loadPostById(playerId).subscribe(postList => {
        this.postList = postList;
        console.log(this.postList)
      })
    });
  }

}
