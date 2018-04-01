import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  constructor(
    @Inject('games') private games
  ) { }

  ngOnInit() {
  }

}
