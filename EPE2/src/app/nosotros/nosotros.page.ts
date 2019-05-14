import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage implements OnInit {
  ngOnInit(): void {
   
  }

  
  sexo: string;
  mostrarMensaje: boolean;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.sexo = "Mujer";
    this.mostrarMensaje = false;
    }

    actualizarSexo(): void {
        if (this.mostrarMensaje) {
          this.showAlert();
        }
       
    }

   async showAlert() {
        let alert = await this.alertCtrl.create({
            header: 'Sexo',
            subHeader: 'El valor de Sexo es: ' + this.sexo,
            buttons: ['OK']
        });
        alert.present();
    }
  }
