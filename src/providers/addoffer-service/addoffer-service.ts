import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AddofferServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AddofferServiceProvider {

  apiUrl = 'http://127.0.0.1:3000/api/v1';

  constructor(public http: HttpClient) {
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



  addOffer(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/viajes', JSON.stringify(data))
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
}
