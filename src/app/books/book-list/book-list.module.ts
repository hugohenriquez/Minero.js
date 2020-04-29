import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list.component';
import { BookListRoutingModule } from './book-list-routing.module';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [BookListComponent],
  imports: [ CommonModule, BookListRoutingModule , MatListModule,  RouterModule, BookListRoutingModule , MatProgressBarModule
  ]
})
export class BookListModule { }
