import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { collection, query, where } from "firebase/firestore";
import { Usuario } from '../interfaces/usuario';
import { Repartidor } from '../interfaces/repartidor';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  myDate = new Date();
  usuarioColleccion!: AngularFirestoreCollection<Usuario>;
  usuarioDoc!: AngularFirestoreDocument<Usuario>;  
  usuarios!: Observable<Usuario[]>;
  usuario!: Observable<Usuario>;

  constructor(private db: AngularFirestore) { 
    this.usuarioColleccion = db.collection('usuarios',ref => ref.orderBy('email','asc'));
  }
  

  getUsuarios(): Observable<Usuario[]>{
    this.usuarios = this.usuarioColleccion.snapshotChanges().pipe(
      map(cambios =>{
        return cambios.map(accion =>{
          const datos = accion.payload.doc.data() as Usuario;
          datos.id = accion.payload.doc.id;
          return datos;
        })
      })
    );
    return this.usuarios;
  }

  agregarUsuario(usuario: Usuario){
    return this.db.collection('usuarios').doc(usuario.email).set({ ...usuario });
  }

  agregarRepartidor(repartidor: Repartidor) {
    console.log("Llego al servicio");
    return this.db.collection('repartidores').doc(repartidor.dni).set({ ...repartidor })
               .catch(error => {
                  console.error('Error al dar de alta el repartidor', error);
                  throw error; 
               });
  }


}