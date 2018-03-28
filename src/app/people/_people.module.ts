import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleService } from './people.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: 'people',
      useClass: PeopleService
    },
  ],
  declarations: []
})
export class PeopleModule { }
