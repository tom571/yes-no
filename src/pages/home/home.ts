
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../../pages/about/about'
import { StartPage } from '../../pages/start/start'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

aboutSwitch() {
  this.navCtrl.push(AboutPage)
}

 startSwitch() {
  this.navCtrl.push(StartPage)
}

  }
