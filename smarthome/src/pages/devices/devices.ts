import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CloudPage } from '../cloud/cloud';

@Component({
  selector: 'page-devices',
  templateUrl: 'devices.html'
})
export class DevicesPage {

  constructor(public navCtrl: NavController) {
  }
  goToCloud(params){
    if (!params) params = {};
    this.navCtrl.push(CloudPage);
  }
}
