import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  /* @ViewChild(IonSegment) segment: IonSegment; */
  @ViewChild(IonSegment, {static: true}) segment: IonSegment;

  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  /* es una variable que va a tener las caracteristicas de la interface Article y que va 
  hacer de tipo array inicializado vacio */
  noticias: Article[]= [];
  constructor(private noticiasService: NoticiasService) {

  }

  ngOnInit(){
        
    this.segment.value = this.categorias[0];
    console.log("categoria",this.segment.value);
    this.cargarNoticia(this.segment.value);
    /* this.noticiasService.getTopHeadLinesCategoria( this.categorias[0]) me trae la primera categoria
          .subscribe(resp => {
            console.log("linea 30",resp);
            this.noticias.push( ...resp.articles);
            
          }); */
  }

  cambioCategoria( event){
    //esto resetea la noticia para que no se concatene con las otras categorias al seleccionarla
    this.noticias = [];
    
    this.cargarNoticia(event.detail.value);
  }

  cargarNoticia( categoria: string ){
    this.noticiasService.getTopHeadLinesCategoria( categoria)//aqui recibe la categoria que viene del argumento del html
          .subscribe(resp => {
            console.log("linea 30",resp);
            this.noticias.push( ...resp.articles);
            
          });
  }
  
}
