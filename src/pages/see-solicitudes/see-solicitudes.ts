import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, App } from 'ionic-angular';
import { AddofferServiceProvider } from '../../providers/addoffer-service/addoffer-service';
import { FormBuilder} from '@angular/forms';

import { Http } from '@angular/http';
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
  id_viaje: any;
  loading: any;

  public offers: any;
  i: any;

  constructor(public addofferServiceProvider: AddofferServiceProvider , public app: App ,public toastCtrl: ToastController, private loadingController: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
    this.getOffers();
    this.id_viaje;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeeSolicitudesPage');
  }
  getOffers(){
    this.addofferServiceProvider.getOffers1()
    .then(data => {
      this.offers = data;
      console.log(this.offers);
    })
  }
    logout(){
        // Remove API token
        const root = this.app.getRootNav();
        root.popToRoot();
        }
      
        aceptarViaje(i){
          this.loading= this.loadingController.create({
            content : 'Aceptando',
          });
            this.loading.present();
          this.addofferServiceProvider.aceptViaje(this.offers[i]).then((result) => {
            this.loading.dismiss();
            this.presentToastrc();
          }, (err) => {
            console.log("Error no recibi nada");
            this.presentToastr()
            this.loading.dismiss();
              })
              
        }
        presentToastr() {
          let toast = this.toastCtrl.create({
            message: 'Error al Aceptar el Viaje',
            duration: 3000
          });
          toast.present();
        }
        presentToastrc() {
          let toast = this.toastCtrl.create({
            message: 'Viaje Aceptado',
            duration: 2000
          });
          toast.present();
        }


}
