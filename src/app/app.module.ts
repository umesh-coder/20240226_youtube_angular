import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HompageComponent } from './components/hompage/hompage.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LeftsidebarComponent } from './components/leftsidebar/leftsidebar.component';
import { VideosComponent } from './components/videos/videos.component';
import { SettingsComponent } from './components/settings/settings.component';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';






@NgModule({
  declarations: [
    AppComponent,
    HompageComponent,
    NavigationComponent,
    LeftsidebarComponent,
    VideosComponent,
    SettingsComponent,
    SubscriptionsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
