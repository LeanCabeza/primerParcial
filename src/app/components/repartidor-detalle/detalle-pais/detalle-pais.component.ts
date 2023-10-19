import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {

  @Input() set repartidor(value: any) {
    this.repartidorSubject.next(value);
  }
  bandera: any;
  private repartidorSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.repartidorSubject.subscribe((repartidor) => {
      if (repartidor) {
        this.obtenerDatosBandera(repartidor.paisOrigen);
      }
    });
  }

  obtenerDatosBandera(paisOrigen: string) {
    console.log("Obtener bandera pais", paisOrigen);
    this.http.get(`https://restcountries.com/v3.1/name/${paisOrigen}`).subscribe((data: any) => {
      this.bandera = data;
      console.log("Data de la bandera", this.bandera);
    });
  }

}





