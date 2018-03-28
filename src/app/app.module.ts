import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProvideListComponent } from './provide-list/provide-list.component';
import { AppProvideListComponent } from './app-provide-list/app-provide-list.component';
import { ListeService } from './liste.service';


@NgModule({
  declarations: [
    AppComponent,
    ProvideListComponent,
    AppProvideListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{
    provide: 'liste',
    useClass: ListeService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
