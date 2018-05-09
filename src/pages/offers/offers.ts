import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

import { AddofferServiceProvider } from '../../providers/addoffer-service/addoffer-service';
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html'
})
export class OffersPage {
  public event = {
       month: '01-01-2018',
       timeStarts: '00:00',
 }
    
  constructor(public navCtrl: NavController, public AddOfferProvider: AddofferServiceProvider) {


  }
  ofrecerViaje(){

  }  
}
