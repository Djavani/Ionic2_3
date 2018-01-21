import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


//import { ShopPage } from './../shop/shop';
import { UsersPage } from './../users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usrPage = UsersPage;
  
  
  constructor(private navCtrl: NavController) {

  }

  onGoToUsers() {
    this.navCtrl.push(this.usrPage)
    .catch((error) => console.log('Access denied, argument was ' + error));    
  }
}
