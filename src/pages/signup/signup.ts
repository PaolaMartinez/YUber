import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  public isToggled: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isToggled = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  signup(){
    this.navCtrl.push(TabsPage);
  }
  public notify(){
   if (this.isToggled == true){
   this.isToggled = true; }
       else if (this.isToggled == false){
      this.isToggled= false; }
 }
}
