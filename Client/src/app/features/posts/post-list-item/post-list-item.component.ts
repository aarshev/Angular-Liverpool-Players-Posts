import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/core/interfaces';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  
  @Input() post!: IPost;

  constructor(private userService: UserService) { }


  ngOnInit(): void {
  }

}
