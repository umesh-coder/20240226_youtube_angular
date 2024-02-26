import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './components/settings/settings.component';
import { HompageComponent } from './components/hompage/hompage.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';


const routes: Routes = [


  { path: 'setting', component: SettingsComponent },
  { path: 'home', component: HompageComponent },
  { path: 'subscriptions', component: SubscriptionsComponent }



];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
