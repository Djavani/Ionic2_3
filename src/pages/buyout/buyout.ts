import { NavParams, NavController } from 'ionic-angular';
import { Component } from "@angular/core";



@Component({
    selector: 'page-buyout',
    templateUrl: 'buyout.html'
})
export class BuyoutPage {

    productData: { name: string, quantity: number}

    constructor( 
        private navCtr: NavController,
        private navParams: NavParams) {
       this.productData = this.navParams.data; 
    }

    public onConfirmPurchase() {
        this.navCtr.popToRoot();
      }
}