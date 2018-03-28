import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, Inject } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.Emulated,  // default
  selector: 'app-provide-list',
  templateUrl: './provide-list.component.html',
  styleUrls: ['./provide-list.component.css']
})
export class ProvideListComponent implements OnInit {
  isMousedown;

  // tslint:disable-next-line:member-ordering
  @Input() message;

  @Output() update = new EventEmitter();

  constructor(
    @Inject('people') private people
  ) {}

  ngOnInit() {
    console.log(this.people.getPeople());
  }


}
