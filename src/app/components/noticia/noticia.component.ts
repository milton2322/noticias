import { Component, Input, OnInit } from '@angular/core';
/* import { Article } from '../../interfaces/interfaces'; */
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
/* aqui solo de tipo Article sin definir si va a ser un array vacio o no */
  @Input() noticia: Article;
  @Input() indice: number;

  constructor(private iab: InAppBrowser,
              private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {}

  abrirNoticia(){
    /*el _system es para que se ejecute en el navegador nativo*/
    const browser = this.iab.create(this.noticia.url, '_system');
    console.log("noticia", this.noticia.url);
    
  }

  async lanzaMenu() {
      const actionSheet = await this.actionSheetCtrl.create({
        buttons: [{
          text: 'Favorite',
          icon: 'star',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Share',
          icon: 'share',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          cssClass: 'action-dark',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });    
      await actionSheet.present();    
  }

}
