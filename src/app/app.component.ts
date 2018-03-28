import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App!';

  constructor(
    @Inject('liste') private liste,
    @Inject('api') private api
  ) {}
}
