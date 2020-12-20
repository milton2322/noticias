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
    this.noticiasService.getTopHeadLines().subscribe(resp =>{
      console.log('noticias', resp);
      //me trae todos los articulos que hay y los trabaja independientes cada uno
      this.noticias.push( ...resp.articles)
      
    });
  }

}
