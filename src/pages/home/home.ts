import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { OfertasPage } from '../ofertas/ofertas';
import { AddofferServiceProvider } from '../../providers/addoffer-service/addoffer-service';
import { SeeSolicitudesPage } from '../see-solicitudes/see-solicitudes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  offers: any;
  constructor(public navCtrl: NavController, public app: App, public AddOfferProvider: AddofferServiceProvider) {

  }

  logout(){
    // Remove API token
    const root = this.app.getRootNav();
    root.popToRoot();
    }
  moveToOfertas(){
    this.navCtrl.push(OfertasPage);
    }

  seeSolicitudes(){
      this.navCtrl.push(SeeSolicitudesPage);
      }

    
    
    getOffers(){
      this.AddOfferProvider.getOffers()
      .then(data => {
        this.offers = data;
        console.log(this.offers);
      })
    }

}
