import { Component, Input, OnInit } from '@angular/core';
import { Helado } from 'src/app/interfaces/helado';

@Component({
  selector: 'app-helados',
  templateUrl: './helados.component.html',
  styleUrls: ['./helados.component.css']
})
export class HeladosComponent implements OnInit {

  
  @Input() helado: Helado;
  constructor() { }

  ngOnInit() {
  }

  recibirHelado(helado: any){
    this.helado = helado;
  }

}