import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
    BrowserModule
  ],
  providers: [{
    provide: 'liste',
    useClass: ListeService
  },
  {
    provide: 'api',
    useValue: 'http://localhost:4200/'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
