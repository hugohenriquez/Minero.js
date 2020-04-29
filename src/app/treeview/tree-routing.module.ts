import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // { path: '/',             component: HeroesComponent },
  // { path: 'heroe/:id',     component: HeroeComponent },
  // { path: 'customer/:id',  component: CustomerComponent },
  // { path: 'customers',     component: CustomersComponent },
  // { path: '**', pathMatch:'full', redirectTo: 'heroes' }
];


@NgModule({
  imports: [
    RouterModule.forRoot( routes)
    ],
    exports: [
      RouterModule
    ]
 })
export class AppRoutingModule { }
