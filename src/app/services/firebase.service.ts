import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public actualUserMail: string;
  public logged: boolean = false;

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
    this.logged = false;
    this.auth.signOut();
  }

  getUserLogged(){
    return this.auth.authState;
  }

  setLoggedState(value: boolean){
    this.logged = value;
  }

}