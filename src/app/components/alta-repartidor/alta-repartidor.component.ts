import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.css']
})
export class AltaRepartidorComponent implements OnInit {

  @Input() paisOrigen: string = '';

  constructor() { }

  ngOnInit() {
  }

  recibirPais(pais: any) {
    this.paisOrigen = pais;
  }

}
