import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTING } from './app.routes';


//Servicios

 import { GatosService } from './services/gatos.service';
 
//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { GatosComponent } from './components/gatos/gatos.component';
import { AboutComponent } from './components/about/about.component';
import { GatoComponent } from './components/gato/gato.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { GatoTarjetaComponent } from './components/gato-tarjeta/gato-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GatosComponent,
    AboutComponent,
    GatoComponent,
    BuscarComponent,
    GatoTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    GatosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
