import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public navCtrl: NavController){}

  IrChampions(){
    this.navCtrl.navigateForward('champions');
  }
  IrEuropa(){
    this.navCtrl.navigateForward('europa');
  }
  irNosotros(){
    this.navCtrl.navigateForward('nosotros');
  }

 

  
}

