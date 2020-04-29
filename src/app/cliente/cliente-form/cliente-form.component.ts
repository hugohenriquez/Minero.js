import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../../core/services/firestore.service';
import { Customer } from '../../shared/model/customer.model';

@Component({
  selector: 'app-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class FormComponent implements OnInit, AfterViewInit {


    customer  = {};
    // tslint:disable-next-line: no-input-rename
    @Input('usuario') usuario;

  constructor( private firestoreService: FirestoreService){
    this.customer =   this.firestoreService.obtenerUserActual();
  }

  ngAfterViewInit(): void {
    console.log('afterinit');
  }
   
  
  
  ngOnInit(): void {
 
    console.log("ngOnInit");
    this.customer =   this.firestoreService.obtenerUserActual();
    console.log(this.customer);
    
  }

  

  // showCustomer(id: string) {
  //   return this.customer =  this.firestoreService.getCustomer(id);
  // }
      
    
    

}
