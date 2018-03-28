import { Injectable } from '@angular/core';

@Injectable()
export class ListeService {

  messages = [
    {'id': 0, text: 'You are here!'},
    {'id': 1, text: 'You are there!'},
    {'id': 2, text: 'You are where!'}
  ];

  update(id, text) {
    this.messages = this.messages.map(m =>
      m.id === id
        ? {id, text}
        : m
    );
  }

  constructor() { }

}
