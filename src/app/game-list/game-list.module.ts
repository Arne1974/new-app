import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list.component';
import { GamesService } from './games.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GameListComponent],
  providers:    [{
    provide: 'games',
    useClass: GamesService
  }],
  exports:      [GameListComponent]
})
export class GameListModule { }
