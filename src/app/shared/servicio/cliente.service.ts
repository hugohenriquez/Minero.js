import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Customer } from '../model/customer.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class ClienteService {

  customersColeccion: AngularFirestoreCollection<Customer>;
  customersDoc: AngularFirestoreDocument<Customer>;
  customers: Observable<Customer[]>;
  customer: Observable<Customer>;

  constructor(private db: AngularFirestore) {
    this.customersColeccion = db.collection('customer', ref => ref.orderBy('nombre', 'asc'));
    console.log(this.customersColeccion);
  }


  getCustomers(): Observable<Customer[]> {
    //obtener los clientes
    this.customers = this.customersColeccion.snapshotChanges().pipe(

      map(cambios => {
        return cambios.map(accion => {
          const datos = accion.payload.doc.data() as Customer;
          datos.id = accion.payload.doc.id;
          return datos;
        })
      })

      );
    return this.customers;

  }




  // getCustomer(): Observable<Customer[]> {

  //   return this.afb.colWithIds$<Customer[]>('Customer');
  // }

}
