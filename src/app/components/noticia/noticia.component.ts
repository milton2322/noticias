import { Component, Input, OnInit } from '@angular/core';
/* import { Article } from '../../interfaces/interfaces'; */

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
/* aqui solo de tipo Article sin definir si va a ser un array vacio o no */
  @Input() noticia: Article;
  @Input() indice: number;

  constructor() { }

  ngOnInit() {}

}
