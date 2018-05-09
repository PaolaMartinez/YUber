import { Component } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { AddofferServiceProvider } from '../../providers/addoffer-service/addoffer-service';
import moment from 'moment';
import { Http } from '@angular/http';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  myDate: String = moment().format();
  loading : any;
  id_viaje : number;
  public event = {
       month: '01-01-2018',
       timeStarts: '00:00',
 }
 todo:any = {} 
 public onAddForm: FormGroup;
  constructor(public addofferServiceProvider: AddofferServiceProvider , public toastCtrl: ToastController, private loadingController: LoadingController, private _fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.id_viaje = this.navParams.get('id_viaje');
    console.log(this.id_viaje);
  }
  ngOnInit() {
    console.log(this.myDate)
    this.onAddForm = this._fb.group({
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
  solicitarViaje(){
    this.loading= this.loadingController.create({
      content : 'Publicando',
    });
      this.loading.present();
    this.addofferServiceProvider.addSolit(this.onAddForm.value).then((result) => {
      this.loading.dismiss();
      this.presentToastrc();
    }, (err) => {
      console.log("error no recibi nada");
      this.presentToastr()
      this.loading.dismiss();
        })
        
  }
  presentToastr() {
    let toast = this.toastCtrl.create({
      message: 'Error al Solicitar Viaje',
      duration: 3000
    });
    toast.present();
  }
  presentToastrc() {
    let toast = this.toastCtrl.create({
      message: 'Registrado Correctamente',
      duration: 2000
    });
    toast.present();
  }
}