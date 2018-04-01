import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, Inject } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  encapsulation: ViewEncapsulation.Emulated,  // default
  selector: 'app-provide-list',
  templateUrl: './provide-list.component.html',
  styleUrls: ['./provide-list.component.css']
})
export class ProvideListComponent implements OnInit {
  isMousedown;
  leute;

  // tslint:disable-next-line:member-ordering
  @Input() message;

  @Output() update = new EventEmitter();

  constructor(@Inject('people') private people) {
    this.leute = people.getPeople();
  }

  ngOnInit() {
    console.log('provide-list-component: ', this.leute);
  }


}
