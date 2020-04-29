import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../core/services/firestore.service';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/model/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList = [];

  // bookList: Observable<Book[]>;
  constructor(private fs: FirestoreService) { }

  ngOnInit(): void {
    // this.fs.getBooks().subscribe(books => {
    //   this.bookList = books;
    //   console.log(this.bookList);
    // });
  }

}
