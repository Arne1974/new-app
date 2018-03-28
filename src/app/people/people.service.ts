import { Injectable } from '@angular/core';

@Injectable()
export class PeopleService {

  getPeople() {
    return [
      {
        name: 'Paul'
      },
      {
        name: 'George'
      }
    ];
  }

  constructor() {}
}
