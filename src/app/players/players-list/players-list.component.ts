import { Component, OnInit } from '@angular/core';
import {Players} from '../../model/players';
import {PlayersService} from '../../service/players.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {
  players: Players[] | undefined;

  constructor(private playersService: PlayersService) {
  }

  ngOnInit(): void {
    this.playersService.getAll().subscribe(result => {
        this.players = result;
        console.log(result);
      }, error => {
        console.log(error);
      }
    );
  }
}
