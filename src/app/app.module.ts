import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { ButtonComponent } from './button/button.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { HeadingComponent } from './heading/heading.component';
// Add local Json file
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
     SlideShowComponent,
    ButtonComponent,
    DropDownComponent,
    HeadingComponent
  ],
  imports: [
    BrowserModule,
   HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 