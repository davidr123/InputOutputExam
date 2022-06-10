import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  nombreUsuario: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
}
