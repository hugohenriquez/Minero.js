import { Component, OnInit, Input } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { ClienteService } from '../shared/servicio/cliente.service';
import { FirestoreService } from '../core/services/firestore.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../shared/model/book';




/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */



// const TREE_DATA: FoodNode[] = [
//   {
//     name: '2020',
//     children: [
//       {name: 'minero-011'},
//       {name: 'minero-02'},
//       {name: 'minero-03'},
//     ]
//   }, {
//     name: '2019',
//     children: [
//       {
//         name: 'chuquicamata',
//         children: [
//           {name: 'minero-01'},
//           {name: 'minero-01'},
//         ]
//       }, {
//         name: 'pelambre',
//         children: [
//           {name: 'Pumpkins'},
//           {name: 'Carrots'},
//         ]
//       },
//     ]
//   },
//   {
//     name: '2022',
//     children: [
//       {name: 'minero-01'},
//       {name: 'minero-02'},
//       {name: 'minero-03'},
//     ]
//   },
//   {
//     name: '2023',
//     children: [
//       {name: 'minero-01'},
//       {name: 'minero-02'},
//       {name: 'minero-03'},
//     ]
//   },
//   {
//     name: '2024',
//     children: [
//       {id: 'qweqweqweqweqwe' , name: 'minero-01'},
//       {name: 'minero-02'},
//       {name: 'minero-03'},
//     ]
//   }
// ];

interface FoodNode {
  id?: string;
  name?: string;
  children?: FoodNode[];

}


@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.css']
})
export class TreeviewComponent implements OnInit {


  @Input() nombres: string = 'sin nombre';




  datos: FoodNode[] = [];

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  books: any;
  bookList = [];
  customerList = [];
  customers: any;


  constructor(private fs: FirestoreService,
              private route: ActivatedRoute ) {
    //  this.dataSource.data = TREE_DATA;
    //this.mostrarCustomerTree();


  }


  ngOnInit(): void {

 }



  // mostrarBookTree(){
  //   this.fs.getBooks().subscribe((books: any) => {
  //     this.bookList = books;
  //     // tslint:disable-next-line: prefer-const
  //     // var titles: string [] = [];
  //     var titles: FoodNode[] = [];
  //     console.log(titles);
  //     books.forEach(data => {
  //       // console.log(data);
  //       titles.push({name: data.id});
  //     });

  //     this.datos.push({name: 'Books' , children: titles});
  //     this.dataSource.data = this.datos;
  //     console.log(this.bookList);
  //   });
  // }

  // mostrarCustomerTree(){
  //   this.fs.getCustomer().subscribe((customers: any) => {
  //     this.customerList = customers;
  //     // console.log(this.customerList); // trae todo el objetos
  //     // tslint:disable-next-line: prefer-const
  //     var lista: FoodNode[] = [];  //nombre solo traer los datos de nombre
  //     customers.forEach(data => {
  //       lista.push({name: data.nombre , id: data.id});
  //     });
  //     console.log(lista);
  //     this.datos.push({  name: 'Customers' , children: lista  }  );
  //     this.dataSource.data = this.datos;
  //     console.log(this.dataSource.data);
  //     console.log(this.customerList);
  //   });
  // }





 hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;



}


