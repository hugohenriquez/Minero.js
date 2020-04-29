import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/shared/model/customer.model';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularfirebaseService } from './angularfirebase.service';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
 usuarioSeleccionado = {};
  constructor(private firestore: AngularFirestore, private afb: AngularfirebaseService ){
              }
  
  
 public getCustomerlist(): Observable<any> {
    return this.firestore.collection('Customer').valueChanges();
  }

  public getCustomer(documentId: string) {
   return this.firestore.collection('Customer').doc(documentId).valueChanges();
  }

 public insertarUserseleccionado(user: Customer){
     this.usuarioSeleccionado = user;
     console.log(this.usuarioSeleccionado);
 }

 public obtenerUserActual(){
   return this.usuarioSeleccionado; 
}

  getafbCustomer(): Observable<Customer[]> {
  // Start Using AngularFirebase Service!!
  return this.afb.colWithIds$<Customer[]>('Customer');
}




//  getBookChapters(bookId: string ): Observable<any>{
//    return this.afb.collection('books').doc(bookId).collection('chapters').valueChanges();
//  }

// getBookSections(bookId: string, chapterId: string  ): Observable<any> {
//   return this.afb.collection('books').doc(bookId).collection('chapters').doc(chapterId).collection('sections').valueChanges();
// }









}
