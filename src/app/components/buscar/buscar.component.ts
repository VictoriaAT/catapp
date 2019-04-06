import { Component, OnInit } from '@angular/core';
import { GatosService} from '../../services/gatos.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {
  
  gatos: any[] = [];
  texto: string;
  

  constructor(private gatosService: GatosService,
              private activatedroute: ActivatedRoute) { }

  ngOnInit() {
      
    this.activatedroute.params.subscribe(params =>{
      this.texto= params['texto'];
      this.gatos = this.gatosService.buscarGatos (params ['texto']);
      })
      
  }

}
