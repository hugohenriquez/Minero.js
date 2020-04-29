import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './books/book-list/book-list.component';
import { ClienteTabComponent } from './cliente/cliente-tab/cliente-tab.component';
import { HeaderComponent } from './header/header.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ClienteTreeviewComponent } from './cliente/cliente-treeview/cliente-treeview.component';
import { FormComponent } from './cliente/cliente-form/cliente-form.component';


const routes: Routes = [
  {path: 'clientes' ,  component: HeaderComponent},
  {path: 'clientes' ,  component:MainNavComponent},
  {path: 'clientes/:id' , component:FormComponent}


];


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
 })
export class AppRoutingModule { }
