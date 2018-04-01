import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, Inject } from '@angular/core';
import { GameListModule } from '../game-list/game-list.module';

@Component({
  encapsulation: ViewEncapsulation.Emulated,  // default
  selector: 'app-provide-list',
  templateUrl: './provide-list.component.html',
  styleUrls: ['./provide-list.component.css']
})
export class ProvideListComponent implements OnInit {
  isMousedown;
  spiele;

  // tslint:disable-next-line:member-ordering
  @Input() message;

  @Output() update = new EventEmitter();

  constructor(@Inject('games') private games) {
    this.spiele = games.getGames();
  }

  ngOnInit() {
    console.log('provide-list-component: ', this.spiele);
  }


}
