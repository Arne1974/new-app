import { Component, OnInit, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  persons;

  constructor(
    @Inject('people') private people
  ) { }

  ngOnInit() {
    this.persons = this.people.getPeople();
    console.log(this.persons);
  }

}
