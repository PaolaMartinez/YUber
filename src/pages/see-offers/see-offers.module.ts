import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeeOffersPage } from './see-offers';

@NgModule({
  declarations: [
    SeeOffersPage,
  ],
  imports: [
    IonicPageModule.forChild(SeeOffersPage),
  ],
})
export class SeeOffersPageModule {}
