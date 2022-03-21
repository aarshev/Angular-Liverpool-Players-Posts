import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/core/player.service';
import { IPlayer } from '../../../core/interfaces';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  playerList!: IPlayer[]

  constructor(private playerService: PlayerService) { 
    this.playerService.loadPlayersList().subscribe(playerList => {
      this.playerList = playerList;
    });
  }

  ngOnInit(): void {
  }

}
