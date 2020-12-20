import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {
  /* aqui recibe lo que viene desde el html en este caso los que esta en el *ngFor */
  @Input() noticias: Article[] = [];

  constructor() { }

  ngOnInit() {}

}
