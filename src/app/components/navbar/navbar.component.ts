import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nombre!:string;

  constructor(public dataService:DataserviceService) { }

  ngOnInit(): void {
    this.dataService.nombreUsuario.subscribe(re=>{
      this.nombre=re;
    })
  }

}
