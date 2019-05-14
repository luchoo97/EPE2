import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage implements OnInit {
  futbol: boolean;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.futbol = true;
}

actualizaFutbol() {
    this.showAlert();
}

  async showAlert() {
    const alert = await this.alertCtrl.create({
        header: 'Fútbol',
        subHeader: 'El valor de Fútbol es: ' + this.futbol,
        buttons: ['OK']
    });
    alert.present();
}
  ngOnInit() {
  }

}
