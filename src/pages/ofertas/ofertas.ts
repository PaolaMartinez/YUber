import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { AddofferServiceProvider } from '../../providers/addoffer-service/addoffer-service';

//ALERTA
import { AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public AddOfferProvider: AddofferServiceProvider,
              public alertCtrl: AlertController) {

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

  doPrompt(){
    let prompt = this.alertCtrl.create({
      title: 'Aceptar viaje',
      message: "Ingrese el número de asientos que desea",
      inputs: [
        {
          name: 'asientos',
          placeholder: 'Ingrese un número',
          type: 'number'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: data => {
            console.log('Se ha hecho click en Aceptar')
          }
        }
      ]
    });
    prompt.present();
  }

}
