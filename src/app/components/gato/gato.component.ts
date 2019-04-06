import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { GatosService} from '../../services/gatos.service';

@Component({
  selector: 'app-gato',
  templateUrl: './gato.component.html'
})
export class GatoComponent implements OnInit {

  gato:any={};
  nombre:string;

  constructor(private activatedRoute: ActivatedRoute,
              private gatosService: GatosService) {
    
    this.activatedRoute.params.subscribe(params =>{
      this.nombre = params ['nombre'];
        this.gato = this.gatosService.getGato (params ['nombre']);
       
    })

   }

  ngOnInit() {
  }

}
