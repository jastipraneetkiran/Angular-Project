import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentOneComponent } from './component/component-one/component-one.component';
import { CssInputComponent } from './css-input/css-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    CssInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
