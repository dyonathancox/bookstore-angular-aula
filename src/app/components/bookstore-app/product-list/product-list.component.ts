import { Component, OnInit } from '@angular/core';
import { Book } from './model/Book';
import { BookService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: Array<Book> = [];
  bookService: BookService;

  constructor(bookService: BookService) {

    this.bookService = bookService;

  }

  ngOnInit(): void {

    this.bookService.getBook().subscribe(data => {
      this.livros = this.formataPrecos(data.books.splice(12, 6)); //alterando o primeiro número, altera os livros, já o segundo número refere-se a quantidade de livros que devem aparecer na tela
      console.log(this.livros);
    })

  }

  formataPrecos(lista: Array<Book>) {
    for (let i = 0; i < lista.length; i++) {
      const precoSemSimbolo = lista[i].price.substring(1);
      lista[i].priceInNumber = Number(precoSemSimbolo);
    }
    return lista;
  }

}
