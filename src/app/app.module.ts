import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AltaRepartidorComponent } from './components/alta-repartidor/alta-repartidor.component';
import { FlagsComponent } from './components/alta-repartidor/flags/flags.component';
import { FormComponent } from './components/alta-repartidor/form/form.component';

const firebaseConfig = {
  apiKey: "AIzaSyAB9vc__WffuJUUZuIUrVGlACy42RvrLeU",
  authDomain: "modeloparcial-bb63f.firebaseapp.com",
  projectId: "modeloparcial-bb63f",
  storageBucket: "modeloparcial-bb63f.appspot.com",
  messagingSenderId: "1055329328170",
  appId: "1:1055329328170:web:eaf42439197713aa683753"
};

@NgModule({
  declarations: [	
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    AltaRepartidorComponent,
    FlagsComponent,
    FormComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
