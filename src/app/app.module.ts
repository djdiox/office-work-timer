import { LoginPage } from './../pages/login/login';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { IonicStorageModule } from '@ionic/storage';


import { AngularFireDatabaseModule } from 'angularfire2/database';
import { WorktimeProvider } from '../providers/worktime/worktime';
// Initialize Firebase
const config = {
  apiKey: "AIzaSyDPoC9tZoTTVo-SdBnGr9W6vDZ_KfNCBp0",
  authDomain: "office-work-timer.firebaseapp.com",
  databaseURL: "https://office-work-timer.firebaseio.com",
  projectId: "office-work-timer",
  storageBucket: "office-work-timer.appspot.com",
  messagingSenderId: "775698839882"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule ,
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    WorktimeProvider
  ]
})
export class AppModule { }
