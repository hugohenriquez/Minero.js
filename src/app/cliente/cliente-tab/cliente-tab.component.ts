import { Component, OnInit , Input , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cliente-tab',
  templateUrl: './cliente-tab.component.html',
  styleUrls: ['./cliente-tab.component.css']
})
export class ClienteTabComponent implements OnInit {

    mostrar = false;
    @Output() customer;
  
    constructor( ) {
    

    }


  ngOnInit(): void {
  }
  
  mostarMenu(indes: number) {
    
  }
   



}
