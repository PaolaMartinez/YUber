import { Component } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { AddofferServiceProvider } from '../../providers/addoffer-service/addoffer-service';
import moment from 'moment';
import { Http } from '@angular/http';
import {TabsPage} from '../tabs/tabs';

/**
+ * Generated class for the SignupcarPage page.
+ *
+ * See https://ionicframework.com/docs/components/#navigation for more info on
+ * Ionic pages and navigation.
+ */

@Component({
  selector: 'page-signupcar',
  templateUrl: 'signupcar.html',
})
export class SignupcarPage {
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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupcarPage');
  }
  ngOnInit() {
    console.log(this.myDate)
    this.onAddForm = this._fb.group({
      nickname: ['', Validators.compose([
        Validators.required
      ])],
      matricula: ['', Validators.compose([
        Validators.required
      ])],
      marca: ['', Validators.compose([
        Validators.required
      ])],
      color: ['', Validators.compose([
        Validators.required
      ])],
      foto_car: ['', Validators.compose([
        Validators.required
      ])],
    })
  }
  signupcar(){
    this.loading= this.loadingController.create({
      content : 'Creando Usuario',
    });
      this.loading.present();
    this.addofferServiceProvider.creaUserCar(this.onAddForm.value).then((result) => {
      this.loading.dismiss();
      this.presentToastrc();
    }, (err) => {
      console.log("error no se ha recibido nada");
      this.presentToastr()
      this.loading.dismiss();
        })
       
    this.navCtrl.push(TabsPage);
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