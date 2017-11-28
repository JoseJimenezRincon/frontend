import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CmpDatabindingComponent } from './cmp-databinding/cmp-databinding.component';


@NgModule({
  declarations: [
    AppComponent,
    CmpDatabindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
