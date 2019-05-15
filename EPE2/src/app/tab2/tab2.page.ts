import { Component } from '@angular/core';
import { ToastController, ActionSheetController, NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  hector: boolean;
  constructor(public AsheetCtrl: ActionSheetController, public ToastCtrl: ToastController, public NavCtrl: NavController, public alertCrtl: AlertController){
    this.hector = true;
  }
  

 

  async verNotificacion(){
    const toast = await this.ToastCtrl.create({
      message: "EPE2 - IPCHLE PROFESOR GERMÁN RIVEROS",
      duration: 1000,
      position: "middle"
    })
    toast.present();
  }
  async verPagina(){
    this.NavCtrl.navigateBack('champions');
    
  }

  async verActionSheet() {
    const hoja = await this.AsheetCtrl.create({
      header: 'opciones',
      buttons:
        [
          {
            text: 'notificacion',
            icon: 'information-circle',
            handler: () => {
              this.verNotificacion();
            }
          },{
            text: 'tab',
            icon: 'book',
            handler: () => {
              this.verPagina();
            }
          },{
            text: 'Cerrar',
            icon: 'close-circle',
            handler: () => {
              
            }
          }
        ]
    })
    hoja.present();
  }

  actualizaNombre() {
    this.showAlert();
}

   async showAlert() {
    const alert = await this.alertCrtl.create({
        header: 'Héctor',
        subHeader: 'El valor de Nombre es: ' + this.hector,
        buttons: ['OK']
    });
    alert.present();
}


}
