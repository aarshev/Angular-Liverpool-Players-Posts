import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/core/player.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  playerListNames: any[] = []

  constructor(private playerService: PlayerService) { 
    this.playerService.loadPlayersList().subscribe(playerList => {
      for(let el of playerList){
        this.playerListNames.push({value: el.playerName});
      }
    });
  }

  ngOnInit(): void {
  }

}
