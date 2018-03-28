import { Injectable } from '@angular/core';

@Injectable()
export class ListeService {

  messages = [
    'You are here!',
    'You are there!',
    'You are where!'
  ];

  constructor() { }

}
