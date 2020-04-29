import { Component, OnInit, Input } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from 'src/app/core/services/firestore.service';


import { Customer } from '../../shared/model/customer.model';
import { ClienteService } from 'src/app/shared/servicio/cliente.service';
import { EventEmitter } from 'protractor';

interface FoodNode {
  id?: string;
  name: string ;
  children?: FoodNode[];
}

@Component({
  selector: 'app-cliente-treeview',
  templateUrl: './cliente-treeview.component.html',
  styleUrls: ['./cliente-treeview.component.css']
})
export class ClienteTreeviewComponent implements OnInit {

  // @Input()  customerEvent = new EventEmitter<number>();
  @Input()  id: any;


  customers: {};
  datos: FoodNode[] = [];
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  customerList = [];


  constructor(private firestoreservice: FirestoreService , private router: Router) {
              this.mostrarCustomerTree();
  }


  ngOnInit()  {
  }



    // seleccionar de cliente en tree de firebase
    onSeleccionarCliente( idx: string) {
    this.firestoreservice.getCustomer(idx).subscribe((customer: Customer ) => {
         this.customers = customer;
         console.log(this.customers);
        //  this.customerEvent.emit(this.customers);
         this.firestoreservice.insertarUserseleccionado(this.customers);
        });
  }


     // mostrar tree desde firebase
     mostrarCustomerTree() {
     this.firestoreservice.getafbCustomer().subscribe((customer: any) => {
           console.log(customer);
           this.customerList = customer;
           console.log(this.customerList);
           var listacusto: FoodNode[] = [];
           customer.forEach(data => {
           listacusto.push({id: data.id , name: data.nombre});
        });

           console.log(listacusto);
           this.datos.push({name: 'Customers' , children: listacusto});
           this.dataSource.data = this.datos;

      });
    }






  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;




}
