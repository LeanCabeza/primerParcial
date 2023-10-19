import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from 'src/app/components/alta-repartidor/form/form.component';
import { FlagsComponent } from 'src/app/components/alta-repartidor/flags/flags.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AltaRepartidorComponent } from 'src/app/components/alta-repartidor/alta-repartidor.component';

@NgModule({
  declarations: [
    AltaRepartidorComponent,
    FormComponent,
    FlagsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class AltaRepartidorModule { }