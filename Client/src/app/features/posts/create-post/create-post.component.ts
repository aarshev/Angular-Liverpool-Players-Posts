import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/core/player.service';
import { PostService } from 'src/app/core/post.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  playerListNames: any[] = []

  constructor(private postService: PostService, private playerService: PlayerService, private router: Router) { 
    this.playerService.loadPlayersList().subscribe(playerList => {
      for(let el of playerList){
        this.playerListNames.push({value: el.playerName});
      }
    });
  }

  submitNewPost(newPostForm: NgForm): void {
    //console.log(newPostForm.value);
    this.postService.addPost$(newPostForm.value).subscribe({
      next: (post) => {
        console.log(post);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        //console.error(error);
      }
    })
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }


  ngOnInit(): void {
  }

}
