import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, } from '@Angular/fire/firestore';
import { AngularFireAuthModule, AngularFireAuth   } from '@angular/fire/auth';
import { FlashMessagesModule} from 'angular2-flash-messages';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';

// componentes
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TreeviewComponent } from './treeview/treeview.component';
import {MatTreeModule} from '@angular/material/tree';
import { MenuComponent } from './menu/menu.component';
import { MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from './header/header.component';
import { ClienteTabComponent } from './cliente/cliente-tab/cliente-tab.component';
import { AppRoutingModule } from './app-routing.module';
import { ContratoTabComponent } from './contrato/contrato-tab/contrato-tab.component';
import { FormComponent } from './cliente/cliente-form/cliente-form.component';
import { ContratoFormComponent } from './contrato/contrato-form/contrato-form.component';
import { LotesFormComponent } from './lote/lotes-form/lotes-form.component';
import { LotesTabComponent } from './lote/lotes-tab/lotes-tab.component';
import { FacturacionTabComponent } from './facturacion/facturacion-tab/facturacion-tab.component';
import { FacturacionFormComponent } from './facturacion/facturacion-form/facturacion-form.component';
import { TraficosFormComponent } from './traficos/traficos-form/traficos-form.component';
import { TraficosTabComponent } from './traficos/traficos-tab/traficos-tab.component';
import { ClienteDireccionComponent } from './cliente/cliente-direccion/cliente-direccion.component';
import { ClienteContratoComponent } from './cliente/cliente-contrato/cliente-contrato.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule} from '@angular/material/tabs';
import { BookListRoutingModule } from './books/book-list/book-list-routing.module';
import { BookListComponent } from './books/book-list/book-list.component';
import { CommonModule } from '@angular/common';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { ClienteModule } from './cliente/cliente.module';
import { ClienteRoutingModule } from './cliente/cliente-routing.module';
import { CommercialContactComponent } from './cliente/commercial-contact/commercial-contact.component';
import { CommercialHistoryComponent } from './cliente/commercial-history/commercial-history.component';
import { ContactsComponent } from './cliente/contacts/contacts.component';
import { BankAccountsComponent } from './cliente/bank-accounts/bank-accounts.component';
import { ProductsComponent } from './cliente/products/products.component';
import { CompanyStructureComponent } from './cliente/company-structure/company-structure.component';
import { ConfigurationComponent } from './cliente/configuration/configuration.component';
import { TranslateModule } from '@ngx-translate/core';
import { ClienteTreeviewComponent } from './cliente/cliente-treeview/cliente-treeview.component';
import { ClienteService } from './shared/servicio/cliente.service';
import { FirestoreService } from './core/services/firestore.service';




@NgModule({
  declarations: [
    AppComponent,
    TreeviewComponent,
    MenuComponent,
    HeaderComponent,
    ContratoTabComponent,
    ClienteTabComponent,
    FormComponent,
    ContratoFormComponent,
    LotesFormComponent,
    LotesTabComponent,
    FacturacionTabComponent,
    FacturacionFormComponent,
    TraficosFormComponent,
    TraficosTabComponent,
    ClienteDireccionComponent,
    ClienteContratoComponent,
    BookListComponent,
    CommercialContactComponent,
    CommercialHistoryComponent,
    ContactsComponent,
    BankAccountsComponent,
    ProductsComponent,
    CompanyStructureComponent,
    ConfigurationComponent,
    MainNavComponent,
    ClienteTreeviewComponent












  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatTreeModule,
    MatListModule,
    MatMenuModule,
    BookListRoutingModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firestore, 'admin-minero'),
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTabsModule,
    CommonModule,
    AngularFireStorageModule,
    MatProgressBarModule,
    ClienteRoutingModule,
    ClienteModule,
    TranslateModule.forRoot(),




  ],
  providers: [ ClienteService , FirestoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
