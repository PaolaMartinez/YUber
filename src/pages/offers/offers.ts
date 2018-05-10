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
  loading: any;
  id_viaje: number;
  public event = {
       month: '01-01-2018',
       timeStarts: '00:00',
 }
    
  constructor(public navCtrl: NavController, public AddOfferProvider: AddofferServiceProvider) {


  }
  ofrecerViaje(){

  }  
}
