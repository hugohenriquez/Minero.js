import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClienteTreeviewComponent } from './cliente-treeview/cliente-treeview.component';
import { HeaderComponent } from '../header/header.component';




const routes: Routes = [


];


@NgModule({
  imports: [
    RouterModule.forRoot( routes)
    ],
    exports: [
      RouterModule
    ]
 })
export class ClienteRoutingModule { }
