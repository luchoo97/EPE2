import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-europa',
  templateUrl: './europa.page.html',
  styleUrls: ['./europa.page.scss'],
})
export class EuropaPage implements OnInit {

  constructor(public navCtrl: NavController) { }
  irVolver() {
    this.navCtrl.navigateBack('tab1');
  }
  ngOnInit() {
  }


}
