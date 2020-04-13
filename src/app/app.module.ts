import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, } from '@Angular/fire/firestore';
import { AngularFireAuthModule, AngularFireAuth   } from '@angular/fire/auth';
import { FlashMessagesModule} from 'angular2-flash-messages';
import { FormsModule } from '@angular/forms';




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
import {   MatSelectModule }  from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
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
    MatTabsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
