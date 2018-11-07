import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Home2Page } from '../home2/home2';
import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-menu2',
  templateUrl: 'menu2.html'
})
export class Menu2Page {

  constructor(public navCtrl: NavController) {
  }
  goToHome2(params){
    if (!params) params = {};
    this.navCtrl.push(Home2Page);
  }goToCart(params){
    if (!params) params = {};
    this.navCtrl.push(CartPage);
  }
}
