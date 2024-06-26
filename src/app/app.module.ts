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
import { DetallePaisComponent } from './components/repartidor-detalle/detalle-pais/detalle-pais.component';
import { DetalleRepartidorComponent } from './components/repartidor-detalle/detalle-repartidor/detalle-repartidor.component';
import { RepartidorDetalleComponent } from './components/repartidor-detalle/repartidor-detalle.component';
import { ListaRepartidoresComponent } from './components/repartidor-detalle/lista-repartidores/lista-repartidores.component';
import { HeladosComponent } from './components/helados/helados.component';
import { ListaHeladosComponent } from './components/helados/lista-helados/lista-helados.component';
import { BorrarHeladoComponent } from './components/helados/borrar-helado/borrar-helado.component';
import { CrearHeladoComponent } from './components/helados/crear-helado/crear-helado.component';
import { ModificarHeladoComponent } from './components/helados/modificar-helado/modificar-helado.component';


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
    FormComponent,
    DetallePaisComponent,
    DetalleRepartidorComponent,
    RepartidorDetalleComponent,
    ListaRepartidoresComponent,
    HeladosComponent,
    ListaHeladosComponent,
    BorrarHeladoComponent,
    CrearHeladoComponent,
    ModificarHeladoComponent
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
