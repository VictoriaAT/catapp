import { Component, OnInit } from '@angular/core';
import { GatosService, Gato } from '../../services/gatos.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.component.html'
})
export class GatosComponent implements OnInit {

  gatos: Gato [] = [];


  constructor(private gatosService: GatosService,
              private router: Router) {
    }

  ngOnInit() {

    this.gatos = this.gatosService.getGatos();
    // console.log(this.gatos);
  }

  verGato(nombre: string){
          this.router.navigate(['/gato',nombre]);
        }

}
