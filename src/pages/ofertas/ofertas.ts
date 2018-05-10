import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { AddofferServiceProvider } from '../../providers/addoffer-service/addoffer-service';

/**
 * Generated class for the OfertasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ofertas',
  templateUrl: 'ofertas.html',
})
export class OfertasPage {

  offers: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public AddOfferProvider: AddofferServiceProvider) {

    this.getOffers();
  
  
  }

  getOffers(){
      this.AddOfferProvider.getOffers()
      .then(data => {
       this.offers = data;
      console.log(this.offers);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfertasPage');
  }

}
