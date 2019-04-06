import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gato-tarjeta',
  templateUrl: './gato-tarjeta.component.html',
  styleUrls: ['./gato-tarjeta.component.css']
})
export class GatoTarjetaComponent implements OnInit {

  @Input() gato:any ={};
  @Input() index: number;

  @Output() gatoSeleccionado: EventEmitter <number>;


  constructor(private router: Router){
    this.gatoSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verGato(){
     this.router.navigate(['/gato',this.index]);
    // this.gatoSeleccionado.emit(this.index);
  }

}
