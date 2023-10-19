import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-repartidor',
  templateUrl: './detalle-repartidor.component.html',
  styleUrls: ['./detalle-repartidor.component.css']
})
export class DetalleRepartidorComponent implements OnInit {
  
  @Input() repartidor: any = "" ;

  constructor() { }

  ngOnInit() {
  }

}
