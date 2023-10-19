import { Component, OnInit, Input } from '@angular/core';
import { Helado } from 'src/app/interfaces/helado';
import { HeladoService } from 'src/app/services/helado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-borrar-helado',
  templateUrl: './borrar-helado.component.html',
  styleUrls: ['./borrar-helado.component.css']
})
export class BorrarHeladoComponent implements OnInit {

  @Input() helado: Helado | null;

  constructor(private heladoService:HeladoService) { }

  ngOnInit() {
  }

  borrarHelado(){
    Swal.fire({
      title: 'Estas seguro?',
      text: "Mira que no hay vuelta atras eh!",
      icon: 'warning',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borralo nomas!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.heladoService.borrarHelado(this.helado);
        this.helado = null;
      }
    })
  }

}