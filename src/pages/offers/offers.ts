import { Component } from '@angular/core';
import { NavController, NavParams, Events, ToastController, LoadingController } from 'ionic-angular';
import { AddofferServiceProvider } from '../../providers/addoffer-service/addoffer-service';
//form builder
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import moment from 'moment';
import { Http } from '@angular/http';

@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html'
})
export class OffersPage {
  myDate: String = moment().format();
  loading : any;
  id_viaje :  number;
  public event = {
       month: '01-01-2018',
       timeStarts: '00:00',
 }
  
  todo: any = {}
  public onAddForm: FormGroup;

  constructor(public navCtrl: NavController, public AddOfferProvider: AddofferServiceProvider, public toastCtrl: ToastController, private loadingController:LoadingController, private _form : FormBuilder, public navParams: NavParams) {
                this.id_viaje = this.navParams.get('id_viaje');
                console.log(this.id_viaje);
  }

  ngOnInit(){
    console.log(this.myDate)
    this.onAddForm = this._form.group({
      fecha_hora: ['', Validators.compose([
        Validators.required
      ])],
      origen: ['', Validators.compose([
        Validators.required
      ])],
      destino: ['', Validators.compose([
        Validators.required
      ])],
      precio_unitario: ['', Validators.compose([
        Validators.required
      ])],
      puestos: ['', Validators.compose([
        Validators.required
      ])],
      id_viaje: [this.id_viaje]
    })
  }
  ofrecerViaje(){
    this.loading= this.loadingController.create({
      content : 'Publicando',
    });
    this.loading.present();
    this.AddOfferProvider.addOffer(this.onAddForm.value)
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


}
