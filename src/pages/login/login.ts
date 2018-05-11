import { Component } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { AddofferServiceProvider } from '../../providers/addoffer-service/addoffer-service';
import moment from 'moment';
import { Http } from '@angular/http';
import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  myDate: String = moment().format();
  loading : any;
  id_viaje : number;
  public event = {
       month: '01-01-2018',
       timeStarts: '00:00',
 }
 todo:any = {} 
 public onLoginForm: FormGroup;
 public respuesta:any = {};
 public nickname: string;
  constructor( public nav: NavController, public addofferServiceProvider: AddofferServiceProvider , public toastCtrl: ToastController, private loadingController: LoadingController, private _fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  ngOnInit() {
    console.log(this.myDate)
    this.onLoginForm = this._fb.group({
      nickname: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])],
    })
  }
  login(){
    this.addofferServiceProvider.loginP(this.onLoginForm.value).then((result) => {
      this.respuesta = result;
      if (this.respuesta.length != 1){
        this.presentToast() 
        console.log(this.respuesta);
        console.log(this.respuesta.length);
        console.log(this.onLoginForm.value);
        
      } else{
        console.log('esto');
        console.log(this.respuesta);
        console.log(this.respuesta[0].nickname);
        this.nickname = this.respuesta[0].nickname;
        this.nav.setRoot(HomePage,{nickname: this.nickname});
        this.navCtrl.push(TabsPage, {}, {animate: false});
      }
    }, (err) => {
      console.log("error no recibi nada");
  
        })   
    // Your app login API web service call trigger
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Autentificación fallida',
      duration: 3000
    });
    toast.present();
  }
  presentToastr() {
    let toast = this.toastCtrl.create({
      message: 'Error al Registrarte',
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
