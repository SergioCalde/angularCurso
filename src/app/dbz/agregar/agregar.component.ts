import { Component, EventEmitter, Input, Output} from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{

  @Input() nuevo:Personaje = {
    nombre: '',
    poder: 0
  }

  //Scalderon: Sirve para enviar de un hijo al padre el valor que se quiere emitir. 
  // @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbzService: DbzService){}

  agregar() {
    if(this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.dbzService.agregarPersonaje( this.nuevo );
    // console.log(this.nuevo);
    //Insertar al arregle

    //SCalderon: Se realiza la emision de los datos. 
    // this.onNewCharacter.emit( this.nuevo );


    this.nuevo = {
      nombre: '', 
      poder: 0
    }
  }
      
}
