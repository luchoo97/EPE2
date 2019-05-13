import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.page.html',
  styleUrls: ['./champions.page.scss'],
})
export class ChampionsPage implements OnInit {

  constructor(public navCtrl: NavController) { }
   irVolver(){
    this.navCtrl.navigateBack('tab1');
  }

  ngOnInit() {
  }

}
