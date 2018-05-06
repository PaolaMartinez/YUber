import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public event = {
       month: '01-01-2018',
       timeStarts: '00:00',
 }
  constructor(public navCtrl: NavController) {

  }
  solicitarViaje(){

  }
}
