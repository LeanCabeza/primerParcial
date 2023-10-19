import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Helado } from '../interfaces/helado';

@Injectable({
  providedIn: 'root'
})
export class HeladoService {

  myDate = new Date();
  heladoColleccion!: AngularFirestoreCollection<Helado>;
  helados!: Observable<Helado[]>;
  helado!: Observable<Helado>;

  constructor(private db: AngularFirestore) { 
    this.heladoColleccion = db.collection('helados',ref => ref);
  }
  

  getHelados(): Observable<Helado[]>{
    this.helados = this.heladoColleccion.snapshotChanges().pipe(
      map(cambios =>{
        return cambios.map(accion =>{
          const datos = accion.payload.doc.data() as Helado;
          datos.sabor = accion.payload.doc.id;
          return datos;
        })
      })
    );
    return this.helados;
  }


  agregarHelado(helado: Helado) {
    console.log("Llego al servicio");
    return this.db.collection('helados').doc(helado.sabor).set({ ...helado })
               .catch(error => {
                  console.error('Error al dar de alta', error);
                  throw error; 
               });
  }

  modificarHelado(helado: Helado) {
    this.heladoColleccion.doc(helado.sabor).update({ ...helado })
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Modificado correctamente!',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Error al modificar!',
          showConfirmButton: false,
          timer: 1500
        })
      });
  }

  borrarHelado(helado: any) {
    return this.heladoColleccion.doc(helado.sabor).delete()
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Eliminada correctamente!',
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Error al eliminar!',
          showConfirmButton: false,
          timer: 1500
        });
      });
  }

}