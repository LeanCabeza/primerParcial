import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Repartidor } from 'src/app/interfaces/repartidor';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  @Input() paisOrigen: string = '';
  repartidorForm: FormGroup;


  constructor(private formBuilder: FormBuilder,private userService: UsuariosService) {
    this.repartidorForm = this.formBuilder.group({
      dni: ['', [Validators.required, Validators.minLength(5)]],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      edad: ['', [Validators.required, Validators.min(0)]],
      capacidadTransporte: ['', [Validators.required, Validators.min(0)]],
      unidadPropia: ['', [Validators.required]]
    });
  }

  ngOnInit() {

  }

  submitForm() {
    console.log("Entro al submit form",this.repartidorForm.value);

    if(this.paisOrigen != "" ){
        let repartidor : Repartidor  = {
          dni: this.repartidorForm.value.dni,
          nombre: this.repartidorForm.value.nombre,
          edad: this.repartidorForm.value.edad,
          capacidadTransporte: this.repartidorForm.value.capacidadTransporte,
          unidadPropia: this.repartidorForm.value.unidadPropia,
          paisOrigen: this.paisOrigen
        }
        this.userService.agregarRepartidor(repartidor).then(response => {
          Swal.fire({
            icon: 'success',
            title: 'Dado de alta correctamente!',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(error => {
          console.error('Error al dar de alta los datos', error);
          Swal.fire({
            icon: 'error',
            title: 'Error al dar de alta',
            showConfirmButton: false,
            timer: 1500
          })
        });
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Te falto seleccionar un pais del listado de paises.',
        showConfirmButton: false,
        timer: 1500
      })
    }
      
      
  }


}
