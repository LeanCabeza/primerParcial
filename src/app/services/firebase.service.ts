import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public actualUserMail: string;

  constructor(public auth: AngularFireAuth) { 
  }

  async register(email: string, password:string){
    this.actualUserMail = email;
    try {
        return await this.auth.createUserWithEmailAndPassword(email,password);
    } catch (error) {
      this.actualUserMail= "";
      throw error;
    }
  }

  async login(email:string, password:string){
      this.actualUserMail = email;
      try {
          return await this.auth.signInWithEmailAndPassword(email,password);
      } catch (error) {
        this.actualUserMail= "";
        throw error;
      }
  }

  logout(){
    this.actualUserMail= "";
    this.auth.signOut();
  }

  getUserLogged(){
    return this.auth.authState;
  }

}