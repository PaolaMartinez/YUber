import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { OfertasPage } from '../ofertas/ofertas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  offers: any;
  constructor(public navCtrl: NavController, public app: App) {
    
  }

  moveToOfertas(){
    this.navCtrl.push(OfertasPage)
  }

  logout(){
    // Remove API token
    const root = this.app.getRootNav();
    root.popToRoot();
    }

    
}
