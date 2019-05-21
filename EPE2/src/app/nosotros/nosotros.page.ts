import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage implements OnInit {
  
  equipo: string;
  mostrarMensaje: boolean;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.equipo = "Tottenham";
    this.mostrarMensaje = false;
    }

    actualizarSexo(): void {
        if (this.mostrarMensaje) {
          this.showAlert();
        }
       
    }

   async showAlert() {
        const alert = await this.alertCtrl.create({
            header: 'Equipo',
            subHeader: 'Has votado por: ' + this.equipo,
            buttons: ['OK']
        });
        alert.present();
    }
    ngOnInit(): void {
   
    }
  }
