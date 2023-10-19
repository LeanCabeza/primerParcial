import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepartidorDetalleRoutingModule } from './repartidor-detalle-routing.module';
import { RepartidorDetalleComponent } from 'src/app/components/repartidor-detalle/repartidor-detalle.component';
import { DetalleRepartidorComponent } from 'src/app/components/repartidor-detalle/detalle-repartidor/detalle-repartidor.component';
import { ListaRepartidoresComponent } from 'src/app/components/repartidor-detalle/lista-repartidores/lista-repartidores.component';
import { DetallePaisComponent } from 'src/app/components/repartidor-detalle/detalle-pais/detalle-pais.component';


@NgModule({
  declarations: [
    RepartidorDetalleComponent,
    DetalleRepartidorComponent,
    ListaRepartidoresComponent,
    DetallePaisComponent
  ],
  imports: [
    CommonModule,
    RepartidorDetalleRoutingModule
  ]
})
export class RepartidorDetalleModule { }
