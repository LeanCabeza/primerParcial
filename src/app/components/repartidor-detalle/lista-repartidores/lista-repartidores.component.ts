import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Repartidor } from 'src/app/interfaces/repartidor';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-lista-repartidores',
  templateUrl: './lista-repartidores.component.html',
  styleUrls: ['./lista-repartidores.component.css']
})
export class ListaRepartidoresComponent implements OnInit {

  repartidores: Repartidor[] = [];
  @Output() selectedRepartidorOutput = new EventEmitter<object>();


  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.usuariosService.getUsuarios().subscribe((repartidores) => {
      this.repartidores = repartidores;
    });
  }

  seleccionarRepartidor(repartidor: any){
    console.log("Repartidor emitido desde la lista",repartidor)
    this.selectedRepartidorOutput.emit(repartidor)
  }
}
