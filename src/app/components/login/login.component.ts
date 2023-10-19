import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  constructor(private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit() {
  }

  async login() {
    try {
      await this.firebaseService.login(this.email, this.password);
      Swal.fire({
        icon: 'success',
        title: 'Loggeado con exito',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['']);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Algo salio mal con tu clave...',
        text: 'Por favor reintenta loggearte',
        showConfirmButton: true
      })
    }
  }

  selectUser(userId: number) {
    if (userId === 1) {
      this.email = 'admin@admin.com';
      this.password = 'password1';
    } else if (userId === 2) {
      this.email = 'usuario2@example.com';
      this.password = 'password2';
    }
  }

}
