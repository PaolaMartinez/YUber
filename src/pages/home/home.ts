import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

import { AddofferServiceProvider } from '../../providers/addoffer-service/addoffer-service';
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
    const root = this.app.getRootNav();
    root.popToRoot();
    }

    
    
    getOffers(){
      this.AddOfferProvider.getOffers()
      .then(data => {
        this.offers = data;
        console.log(this.offers);
      })
    }

}
