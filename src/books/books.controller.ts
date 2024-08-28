import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Book } from './book.entity';

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all books' })
  @ApiResponse({ status: 200, description: 'List of all books.' })
  findAll(): Book[] {
    return this.booksService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a book by ID' })
  @ApiResponse({ status: 200, description: 'The book.' })
  @ApiResponse({ status: 404, description: 'Book not found.' })
  findOne(@Param('id') id: number): Book {
    return this.booksService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Add a new book' })
  @ApiResponse({ status: 201, description: 'The book has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  create(@Body() createBookDto: CreateBookDto): Book {
    return this.booksService.create(createBookDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a book by ID' })
  @ApiResponse({ status: 200, description: 'The book has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Book not found.' })
  update(@Param('id') id: number, @Body() updateBookDto: UpdateBookDto): Book {
    return this.booksService.update(id, updateBookDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a book by ID' })
  @ApiResponse({ status: 204, description: 'The book has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Book not found.' })
  remove(@Param('id') id: number): void {
    return this.booksService.remove(id);
  }
}
