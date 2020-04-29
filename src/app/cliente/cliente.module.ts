import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteTreeviewComponent } from './cliente-treeview/cliente-treeview.component';
import { MatTreeModule} from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommercialContactComponent } from './commercial-contact/commercial-contact.component';
import { CommercialHistoryComponent } from './commercial-history/commercial-history.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import { ProductsComponent } from './products/products.component';
import { CompanyStructureComponent } from './company-structure/company-structure.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { MainNavComponent } from '../main-nav/main-nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [   ],
  imports: [

    CommonModule,
    FormsModule,
    MatTreeModule,
    MatIconModule,



  ]

})
export class ClienteModule  { }
