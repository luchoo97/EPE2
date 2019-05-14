import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  video: any = {
    url: 'https://www.youtube.com/embed/X3Zs-HZczUM',
    title: 'CHAMPIONS'

    
};
videoo: any = {
  url: 'https://www.youtube.com/embed/wazqZEkbVR0',
  title1: 'EU'
  
};

vide1: any = {
  url: 'https://www.youtube.com/embed/zutXWIRnOV80',
  title2: 'LIVERPOOL 4 - BARCELONA 0 '
  
};
video2: any = {
  url: 'https://www.youtube.com/watch?v=jbHjp3wggFc&t=46s',
  title3: 'Valencia 2 - Arsenal 4 '
  
};


  public videos: boolean = true;
  trustedVideoUrl: SafeResourceUrl;
  trustedVideoUrl1: SafeResourceUrl;
  trustedVideoUrl2: SafeResourceUrl;
  trustedVideoUrl3: SafeResourceUrl;
  constructor(public navCtrl: NavController,
    private domSanitizer: DomSanitizer){
      

  }
  ionViewWillEnter(): void {
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);
    this.trustedVideoUrl1 = this.domSanitizer.bypassSecurityTrustResourceUrl(this.videoo.url);
    this.trustedVideoUrl2 = this.domSanitizer.bypassSecurityTrustResourceUrl(this.vide1.url);
    this.trustedVideoUrl3 = this.domSanitizer.bypassSecurityTrustResourceUrl(this.vide1.url);

}
}