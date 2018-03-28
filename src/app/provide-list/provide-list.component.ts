import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-provide-list',
  templateUrl: './provide-list.component.html',
  styleUrls: ['./provide-list.component.css']
})
export class ProvideListComponent implements OnInit {
  // tslint:disable-next-line:member-ordering
  @Input() message;

  constructor() { }

  ngOnInit() {
  }


}
