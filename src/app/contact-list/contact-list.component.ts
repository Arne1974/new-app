import { Component, OnInit, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  @Input() person;

  constructor(
    // @Inject('people') private people
  ) { }

  ngOnInit() {
    // console.log(this.people.getPeople());
  }

}
