import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {


  @Input() nombreHijo: string='sin nimbre';
  @Output() cambioNombreHijo= new EventEmitter<string>();

  constructor(private dataService : DataserviceService) { }

  ngOnInit(): void {
  }

  PasaralPadre(){
this.nombreHijo = 'V3ckita';
this.cambioNombreHijo.emit(this.nombreHijo);
this.dataService.nombreUsuario.emit(this.nombreHijo);

  }

}
