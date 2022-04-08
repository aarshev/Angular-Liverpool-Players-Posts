import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPost, IUser } from 'src/app/core/interfaces';
import { PostService } from 'src/app/core/post.service';
import { UserService } from 'src/app/core/user.service';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  
  @Input() post!: IPost;


  userID: string = '';
  canSubscribe: boolean = false;
  likes!: number;

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get currentUser(): string {
    
    return this.userService.currentUser._id;
  }

  constructor(private postService: PostService,private router: Router, private userService: UserService, private ref:ChangeDetectorRef) { }


  ngOnInit(): void {
    if(this.userService.currentUser){
      this.userID = this.userService.currentUser._id;
    }
  }

  deleteHandler(postID: string): void {
    if(confirm("Are you sure to delete this post")) {
        this.postService.deletePostById(postID).subscribe({
          next: args => {
          },
          complete: () => {
            this.router.navigate(['/home']);
          },
          error: () => {
          }
        });
    }
  }

  likePost(postID:string): void{
    //console.log(this.userID)
    this.postService.likePost(postID, this.userID).subscribe(postList => {
      this.canSubscribe = !postList.likes.includes(this.currentUser);
      this.likes = postList.likes.length
    })
  }

  ngOnChanges(): void {
    this.canSubscribe = !this.post.likes.includes(this.currentUser);
    this.likes = this.post.likes.length
  }

}
