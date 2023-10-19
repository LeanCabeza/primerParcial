import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Helado } from 'src/app/interfaces/helado';
import { HeladoService } from 'src/app/services/helado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-helado',
  templateUrl: './crear-helado.component.html',
  styleUrls: ['./crear-helado.component.css']
})
export class CrearHeladoComponent implements OnInit {

  helado: Helado = {};
  pizzaForm: FormGroup;


  constructor(private heladoService: HeladoService,
    private fb: FormBuilder) {

  }

  ngOnInit() {
  }

  crearHelado() {
      this.heladoService.agregarHelado(this.helado)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Dado de alta correctamente!',
            showConfirmButton: false,
            timer: 1500
          })
          this.helado = {};
        })
        .catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Error en el alta',
            showConfirmButton: false,
            timer: 1500
          })
        });
    } 
}