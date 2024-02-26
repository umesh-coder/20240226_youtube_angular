import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HompageComponent } from './components/hompage/hompage.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LeftsidebarComponent } from './components/leftsidebar/leftsidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    HompageComponent,
    NavigationComponent,
    LeftsidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
