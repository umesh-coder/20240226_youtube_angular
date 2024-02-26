import { Component, Output, EventEmitter } from '@angular/core';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})


export class NavigationComponent {

  name = "Umesh Shelare"
  profilepic = "https://i.postimg.cc/mZSQ9JRk/66726-customer-account-google-service-button-search-logo.png"

  url = "https://i.postimg.cc/L6SvsF2N/youin.png";

  // Variable to toggle settings menu height
  settingsMenuHeight = false;

  settingsMenuToggle() {

    this.settingsMenuHeight = !this.settingsMenuHeight;


  }


}
