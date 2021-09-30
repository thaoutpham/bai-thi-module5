import { Component, OnInit } from '@angular/core';
import {Players} from '../../model/players';
import {PlayersService} from '../../service/players.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-players-delete',
  templateUrl: './players-delete.component.html',
  styleUrls: ['./players-delete.component.css']
})
export class PlayersDeleteComponent implements OnInit {

  players: Players | undefined;
  constructor(private playersService: PlayersService, private activatedRoute: ActivatedRoute) {}
  bookForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    champ: new FormControl(),
    kda: new FormControl(),
    des: new FormControl()
  });
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( paramMap =>{
      const  id = paramMap.get('id');
      console.log(id);
      this.playersService.getById(id).subscribe(result =>{
          this.players = result;
          console.log(result);
        this.bookForm = new FormGroup({
          id: new FormControl(this.players.id),
          name: new FormControl(this.players.name),
          champ: new FormControl(this.players.champ),
          kda: new FormControl(this.players.kda),
          des: new FormControl(this.players.des)
        });
        },error => {
          console.log(error)
        }
      )
    });
    this.players = {
      id: '1',
      name: 'hello',
      champ: 'hello',
      kda: 'hello',
      des: 'hello'
    }
  }
  deletePlayers(){
    const players = this.bookForm.value;
    console.log(players);
    // @ts-ignore
    this.playersService.deletePlayers(this.players.id).subscribe(abc =>{
      alert("Delete ok");
      history.back();
    })
  }

}
