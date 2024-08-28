import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  private books: Book[] = [];
  private idCounter = 1;

  create(createBookDto: CreateBookDto): Book {
    const newBook: Book = {
      id: this.idCounter++,
      ...createBookDto,
    };
    this.books.push(newBook);
    return newBook;
  }

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book {

    const book = this.books.find((book) => book.id == id);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  update(id: number, updateBookDto: UpdateBookDto): Book {
    const book = this.findOne(id);
    Object.assign(book, updateBookDto);
    return book;
  }

  remove(id: number): void {
    const index = this.books.findIndex((book) => book.id == id);
    if (index === -1) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    this.books.splice(index, 1);
  }
}
