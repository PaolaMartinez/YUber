import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController,LoadingController } from 'ionic-angular';
/*
  Generated class for the AddofferServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AddofferServiceProvider {

  apiUrl = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient,
    public alertCtrl: AlertController,
    private loadingController: LoadingController) {
    console.log('Hello AddofferServiceProvider Provider');
  }

  getOffers(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/viajes').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getSol(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/SolViajes').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  
  }

  addOffer(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/Viajes', JSON.stringify(data))
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
  
  addSolit(result){
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/SolViajes',result).subscribe(
        data=>{
          resolve(data)
        },err =>{
          console.log(err);
          if(!err.ok){
            this.showAlert();
          }
        }
      )
    })
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'No Internet!',
      subTitle: 'Please connect!',
      buttons: ['OK']
    });
    alert.present();
  }
}
