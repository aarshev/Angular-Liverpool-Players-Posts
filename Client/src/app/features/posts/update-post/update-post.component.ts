import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from 'src/app/core/interfaces';
import { PlayerService } from 'src/app/core/player.service';
import { PostService } from 'src/app/core/post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  //@ViewChild('editProfileForm') editProfileForm!: NgForm;

  postList!: IPost[];

  editProfileForm: FormGroup = this.formBuilder.group({
    playerName: new FormControl(''),
    postContent: new FormControl('')
  });

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const postId = params['id'];
      this.postService.loadPostById(postId).subscribe(data => {
        this.postList = data; 
        console.log(this.editProfileForm)
        this.editProfileForm.get("playerName")!.setValue(this.postList[0].playerName)
      })
    });
  }

  playerListNames: any[] = []

  constructor(private formBuilder: FormBuilder,private postService: PostService, private playerService: PlayerService, private router: Router, private activatedRoute:ActivatedRoute) { 
    this.playerService.loadPlayersList().subscribe(playerList => {
      for(let el of playerList){
        this.playerListNames.push({value: el.playerName});
      }
    });
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

}
