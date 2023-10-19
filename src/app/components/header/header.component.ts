import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logged = false;
  emailUsuario = "";

  constructor(private  fb: FirebaseService) { }

  ngOnInit() {
    this.obtenerUsuarioLoggeado();
  }

  obtenerUsuarioLoggeado(){
    this.fb.getUserLogged().subscribe(user => {
      console.log(user?.email);
      if (user?.email != null) {
        this.logged = true; 
        this.emailUsuario = user.email 
      } else this.logged = false;
    })
  }

  logout(){
    this.fb.logout();
    this.logged = false;
    Swal.fire({
      icon: 'success',
      title: 'Desloggeado con exito!',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
