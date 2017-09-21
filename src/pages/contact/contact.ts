import { WorkTime } from './../../providers/worktime/worktime';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public currentWorkTime: WorkTime = {
    start: new Date().toISOString(),
    end: new Date().toISOString()
  };

  constructor(public navCtrl: NavController) {

  }

}
