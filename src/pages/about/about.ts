import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public event = {
       month: '01-01-2018',
       timeStarts: '00:00',
 }
  constructor(public navCtrl: NavController) {

  }
  ofrecerViaje(){
    
  }
}
