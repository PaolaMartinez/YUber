import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { AddofferServiceProvider } from '../../providers/addoffer-service/addoffer-service';

//ALERTA
import { AlertController } from 'ionic-angular';

import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import moment from 'moment';
import { Http } from '@angular/http';
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

  public offers: any;
  loading: any;

  public onAddForm: FormGroup; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public AddOfferProvider: AddofferServiceProvider,
              public alertCtrl: AlertController, public toastCtrl: ToastController, private viewCtrl: ViewController,
              private loadingController: LoadingController) {
  }
  getOffers(){
      this.AddOfferProvider.getOffers()
      .then(data => {
       this.offers = data;
      console.log(this.offers);
      });
  }

  ionViewDidEnter() {
    this.getOffers();
    console.log('ionViewDidLoad OfertasPage');
  }

  doPrompt(i){
    console.log('dopront');
    console.log(i);
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
            console.log('pront');
            console.log(i);
            if (this.verifySits(data,i)){
              console.log('Se ha hecho click en Aceptar');
              this.loading = this.loadingController.create({
                content : 'Cargando...'
              });
              this.updatePuestos(data.asientos)
              this.loading.present();
            }
          }
        }
      ]
    });
    prompt.present();
  }

  verifySits(data, i: number){
    var isAvailable: boolean = false;
    console.log(i);
    console.log('estoy en offers');
    console.log(this.offers[0].puestos);
    if ((data.asientos) < this.offers[0].puestos){
        isAvailable = true;
      } else {
        this.showAlert()
      }
      return isAvailable; 
    }

  updatePuestos(data){
    this.loading= this.loadingController.create({
      content : 'Publicando',
    });
    this.loading.present();
    this.AddOfferProvider.updateViaje(this.offers, data)
    .then((result)=> {
      this.loading.dismiss();
      this.presentToastCorrect();
    }, (err) => {
      console.log("error, no recibi nada");
      this.presentToastr()
      this.loading.dismiss();
    })
  }

  
  presentToastr(){
    let toast = this.toastCtrl.create({
      message: 'Error al ofrecer viaje',
      duration: 3000
    });
    toast.present();
  }

  presentToastCorrect(){
    let toast = this.toastCtrl.create({
      message: 'Registrado correctamente',
      duration: 2000
    });
    toast.present();
  }

     
    showAlert() {
      let alert = this.alertCtrl.create({
        message: 'Se excede el número de asientos diponible ',
        buttons: ['OK']
      });
      alert.present();
    }
}
