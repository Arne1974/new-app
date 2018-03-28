import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProvideListComponent } from './provide-list/provide-list.component';
import { AppProvideListComponent } from './app-provide-list/app-provide-list.component';
import { ListeService } from './liste.service';
import { PeopleService } from './people.service';
import { ContactListComponent } from './contact-list/contact-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ProvideListComponent,
    AppProvideListComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {
      provide: 'liste',
      useClass: ListeService
    },
    {
      provide: 'people',
      useClass: PeopleService
    },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
