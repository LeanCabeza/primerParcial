import { Component, OnInit, Input } from '@angular/core';
import { Helado } from 'src/app/interfaces/helado';
import { HeladoService } from 'src/app/services/helado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-helado',
  templateUrl: './modificar-helado.component.html',
  styleUrls: ['./modificar-helado.component.css']
})
export class ModificarHeladoComponent implements OnInit {
  @Input() helado: Helado | null;


  constructor(private heladoService: HeladoService) { }

  ngOnInit() {
  }

  modificarHelado() {
    if(this.helado != null){
      this.heladoService.modificarHelado(this.helado);
      this.helado = null;
    }else{
      Swal.fire({
        icon: 'error',
        title: '❌ No seleccionaste un helado!',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

}