import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddofferServiceProvider } from '../../providers/addoffer-service/addoffer-service';

/**
 * Generated class for the SeeSolicitudesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-see-solicitudes',
  templateUrl: 'see-solicitudes.html',
})
export class SeeSolicitudesPage {
  offers: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public AddOfferProvider: AddofferServiceProvider) {
    this.getOffers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeeSolicitudesPage');
  }
  getOffers(){
    this.AddOfferProvider.getOffers()
    .then(data => {
      this.offers = data;
      console.log(this.offers);
    })
  }
}
