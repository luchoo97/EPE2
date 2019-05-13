import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public form = [
    { val: 'Héctor Navarro', isChecked: true },
    { val: 'Luis Sánchez', isChecked: false },
    
  ];
}
