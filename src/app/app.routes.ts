import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {GatosComponent} from './components/gatos/gatos.component';
import {GatoComponent} from './components/gato/gato.component';
import {BuscarComponent} from './components/buscar/buscar.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'gatos', component: GatosComponent },
    { path: 'gato/:nombre', component: GatoComponent},
    { path: 'buscar/:texto', component: BuscarComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'},

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
