import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App!';

  onUpdate(id, text) {
    this.liste.update(id, text);
  }

  constructor(
    @Inject('liste') private liste,
    @Inject('people') private people
  ) {}
}
