import { Component } from '@angular/core';
import { ToastController, ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(public AsheetCtrl: ActionSheetController, public ToastCtrl: ToastController, public NavCtrl: NavController){}
  public form = [
    { val: 'Héctor Navarro', isChecked: true },
    { val: 'Luis Sánchez', isChecked: false },
    
  ];
  async verNotificacion(){
    const toast = await this.ToastCtrl.create({
      message: "EPE2 - IPCHLE PROFESOR GERMÁN RIVEROS",
      duration: 1000,
      position: "middle"
    })
    toast.present();
  }
  async verPagina(){
    this.NavCtrl.navigateBack('tab1');
    
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


}
