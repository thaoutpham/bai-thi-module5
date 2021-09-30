import { Component, OnInit } from '@angular/core';
import {PlayersService} from '../../service/players.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-players-create',
  templateUrl: './players-create.component.html',
  styleUrls: ['./players-create.component.css']
})
export class PlayersCreateComponent implements OnInit {

  constructor(private playersService: PlayersService) { }
  bookForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    champ: new FormControl(),
    kda: new FormControl(),
    des: new FormControl()
  });
  ngOnInit(): void {
  }
  createPlayers(){
    const players = this.bookForm.value;
    console.log(players);
    this.playersService.getPlayers(players).subscribe(() =>{
        alert("Ok");
      },error => {
        console.log(error);
      }
    )
  }
}
