import { Component, Input, OnInit } from '@angular/core';
import { IPlayer } from 'src/app/core/interfaces';

@Component({
  selector: 'app-players-list-item',
  templateUrl: './players-list-item.component.html',
  styleUrls: ['./players-list-item.component.css']
})
export class PlayersListItemComponent implements OnInit {

  constructor() { }

  @Input() player!: IPlayer;

  ngOnInit(): void {
  }

}
