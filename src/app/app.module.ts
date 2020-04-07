import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



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






  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
