import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookListRoutingModule } from '../books/book-list/book-list-routing.module';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { BookListComponent } from '../books/book-list/book-list.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TreeviewComponent } from './treeview.component';
import {MatTreeModule} from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { FormComponent } from '../cliente/cliente-form/cliente-form.component';




@NgModule({
  declarations: [BookListComponent , TreeviewComponent , FormComponent],
  imports: [ CommonModule,
     BookListComponent,
     MatListModule,
     RouterModule,
     BookListRoutingModule,
     MatProgressBarModule,
     MatTreeModule,
     MatIconModule,
     MatProgressBarModule,

  ]
})
export class BookListModule { }
