import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeeSolicitudesPage } from './see-solicitudes';

@NgModule({
  declarations: [
    SeeSolicitudesPage,
  ],
  imports: [
    IonicPageModule.forChild(SeeSolicitudesPage),
  ],
})
export class SeeSolicitudesPageModule {}
