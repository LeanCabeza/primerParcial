import { Helado } from 'src/app/interfaces/helado';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeladoService } from 'src/app/services/helado.service';

@Component({
  selector: 'app-lista-helados',
  templateUrl: './lista-helados.component.html',
  styleUrls: ['./lista-helados.component.css']
})
export class ListaHeladosComponent implements OnInit {

  helados: Helado[] = [];
  @Output() selectedHeladoOutput = new EventEmitter<object>();

  constructor(private heladoService: HeladoService) { }

  ngOnInit() {
    this.heladoService.getHelados().subscribe((helados) => {
      this.helados = helados;
    });
  }

  seleccionarHelado(helado: any){
    this.selectedHeladoOutput.emit(helado)
  }

}
