import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { MarutiModule } from './maruti/maruti.module';
import { HondaModule } from './honda/honda.module';
import { HyundaiModule } from './hyundai/hyundai.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HyundaiModule,
    HondaModule,
    MarutiModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
