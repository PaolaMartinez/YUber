import { Component } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { AddofferServiceProvider } from '../../providers/addoffer-service/addoffer-service';
import moment from 'moment';
import { Http } from '@angular/http';
import {TabsPage} from '../tabs/tabs';
import { SignupcarPage } from '../signupcar/signupcar';


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  myDate: String = moment().format();
  loading : any;
  todo:any = {};
  public onAddForm: FormGroup;
  public isToggled: boolean;
  constructor(public addofferServiceProvider: AddofferServiceProvider , public toastCtrl: ToastController, private loadingController: LoadingController, private _fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.isToggled = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  ngOnInit() {
    console.log(this.myDate)
    this.onAddForm = this._fb.group({
      nombre: ['', Validators.compose([
        Validators.required
      ])],
      apellido: ['', Validators.compose([
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.required
      ])],
      celular: ['', Validators.compose([
        Validators.required
      ])],
      nickname: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])],
    })
  }
  signup(){
    this.loading= this.loadingController.create({
      content : 'Creando Usuario',
    });
      this.loading.present();
    this.addofferServiceProvider.creaUser(this.onAddForm.value).then((result) => {
      this.loading.dismiss();
      this.presentToastrc();
    }, (err) => {
      console.log("error no se ha recibido nada");
      this.presentToastr()
      this.loading.dismiss();
        })
       
    this.navCtrl.push(TabsPage);
  }
  public notify(){
   if (this.isToggled == true){
   this.isToggled = true;
   this.loading= this.loadingController.create({
    content : 'Espere',
  });
   this.loading.present();
   this.addofferServiceProvider.creaUserCC(this.onAddForm.value).then((result) => {
     this.loading.dismiss();
   }, (err) => {
     console.log("error no se ha recibido nada");
     this.presentToastr()
     this.loading.dismiss();
       })
   this.navCtrl.push(SignupcarPage); }
       else if (this.isToggled == false){
      this.isToggled= false; }
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

