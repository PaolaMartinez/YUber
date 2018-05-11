import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { SeeOffersPage } from '../see-offers/see-offers';
import { AddofferServiceProvider } from '../../providers/addoffer-service/addoffer-service';
import { SeeSolicitudesPage } from '../see-solicitudes/see-solicitudes';
import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  offers: any;
  constructor(public navCtrl: NavController, public app: App, public AddOfferProvider: AddofferServiceProvider) {
    this.getOffers();
  }

  logout(){
    // Remove API token
    this.navCtrl.push(WelcomePage);
    }
  seeOffers(){
    this.navCtrl.push(SeeOffersPage);
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
