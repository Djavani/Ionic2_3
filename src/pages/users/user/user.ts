import { Component, OnInit } from '@angular/core';

import { NavParams, NavController } from 'ionic-angular';
import { UsersPage } from '../users';

@Component({
    selector: 'page-user',
    templateUrl: 'user.html'
})
export class UserPage implements OnInit{
    name: string;

    constructor (
        private navParams: NavParams,
        private navCtrl: NavController) {
        
    }

    ngOnInit() {
        this.name = this.navParams.get('userName');
    }

    public onGoBack() {        
       //this.navCtrl.pop(); // volta uma pagina
        //this.navCtrl.popTo(UsersPage); // volta para uma pagina especifica
       this.navCtrl.popToRoot(); // volta para a pagina root
    }
}