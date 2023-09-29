import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

import  { Injector} from '@angular/core';
import  { createCustomElement } from '@angular/elements';
import {APP_BASE_HREF} from '@angular/common';
import { DetailsModule } from './details/details.module';
import { DefaultModule } from './home/home.module';
import { ReadMoreModule } from './read-more/read-more.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: []
})
export class AppModule { 
  constructor(private injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });
    if (customElements.get('app-wc-ui') === undefined) {
      customElements.define('app-wc-ui', el);
    }
  }

  ngDoBootstrap() {

  }
}
