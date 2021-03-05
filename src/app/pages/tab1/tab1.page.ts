import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
//objeto que es de tipo array article vacio
  noticias: Article[] = [];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit() {
    this.cargarNoticias();
  }

  loadData( event){

    /* console.log("loadData",event); */
    
    this.cargarNoticias(event);
  }

  cargarNoticias( event?){
    this.noticiasService.getTopHeadLines().subscribe(resp =>{
      console.log('noticias', resp);

      if(resp.articles.length === 0){
        event.target.disable = true;
        event.target.complete();
        return;
      }
      //me trae todos los articulos que hay y los trabaja independientes cada uno
      this.noticias.push( ...resp.articles);
      //valida que exita el evento
      if (event){
        event.target.complete();
      }
      
    });
  }

}
