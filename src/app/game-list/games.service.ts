import { Injectable } from '@angular/core';

@Injectable()
export class GamesService {

  games = [
    {'id': 0, text: 'SC2'},
    {'id': 1, text: 'Wow'},
    {'id': 2, text: 'Diablo'}
  ];

  getGames() {
    return this.games;
  }

  constructor() { }

}
