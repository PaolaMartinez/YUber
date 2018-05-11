import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { SeeOffersPage } from '../pages/see-offers/see-offers'
import { OffersPage } from '../pages/offers/offers';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SeeSolicitudesPage } from '../pages/see-solicitudes/see-solicitudes';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignupcarPage } from '../pages/signupcar/signupcar'


//HttpClient

import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';
import { AddofferServiceProvider } from '../providers/addoffer-service/addoffer-service';

@NgModule({
  declarations: [
    MyApp,
    OffersPage,
    ContactPage,
    HomePage,
    WelcomePage,
    LoginPage,
    SignupPage,
    TabsPage,
    SeeOffersPage,
    SignupcarPage,
    SeeSolicitudesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OffersPage,
    ContactPage,
    HomePage,
    WelcomePage,
    LoginPage,
    SignupPage,
    TabsPage,
    SeeOffersPage,
    SignupcarPage,
    SeeSolicitudesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    AddofferServiceProvider
  ]
})
export class AppModule {}
