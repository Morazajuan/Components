import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { ButtonComponent } from './button/button.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { HeadingComponent } from './heading/heading.component';
// Add local Json file
import { HttpClientModule } from '@angular/common/http';
import { EntryComponent } from './entry/entry.component';
import { NavBarComponent } from './nav-bar/nav-bar.component'; 
import { RouterModule, Routes, Router } from '@angular/router';
class HeaderComponent {
  constructor(private router: Router){}
  goSlider(){

    this.router.navigate(['slider']);
  }
}



const appRoutes: Routes = [
  
  { path: 'slider',        component: SlideShowComponent },
  { path: '',   redirectTo: '/slider', pathMatch: 'full'},
   
];

@NgModule({
  declarations: [
    AppComponent,
    SlideShowComponent,
    ButtonComponent,
    DropDownComponent,
    HeadingComponent,
    EntryComponent,
    NavBarComponent
  ],
  imports: [  
    RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  ),
    BrowserModule,
   HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 