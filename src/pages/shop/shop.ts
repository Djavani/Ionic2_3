import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { BuyoutPage } from '../buyout/buyout';


@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  constructor(private navCtr: NavController){}

  public onBuy(productData: {name: string, quantity: number}) {
    this.navCtr.push(BuyoutPage, productData)
  }
  
  
}
