import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { DevicesPage } from '../pages/devices/devices';
import { CloudPage } from '../pages/cloud/cloud';


import { Home2Page } from '../pages/home2/home2';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = Home2Page;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToDevices(params){
    if (!params) params = {};
    this.navCtrl.setRoot(DevicesPage);
  }goToCloud(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CloudPage);
  }
}
