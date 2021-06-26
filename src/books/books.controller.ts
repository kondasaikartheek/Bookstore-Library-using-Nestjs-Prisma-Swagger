import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { BooksService } from './books.service';

import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { GetBooksFilterDto } from './dto/get-books-filter.dto';
import { ApiParam } from '@nestjs/swagger';
import { Book } from '@prisma/client';



@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}



  /*@Get()
  getBooks(@Query() filterDto: GetBooksFilterDto): Book[] {
   
    if (Object.keys(filterDto).length) {
      return this.booksService.getFilteredBooks(filterDto);
    }

  
    return this.booksService.getAllBooks();
  }*/

  @Get('/:id')
  getBookById(@Param('id') id: string):Promise<Book> {
    return this.booksService.getBookById(id);
  }

 
  @Post()
  @UsePipes(ValidationPipe)
  createBook(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.booksService.createBook(createBookDto);
  }

  @Delete('/:id')
  @ApiParam({name:'id'})
  deleteBookById(@Param('id') id: string):Promise <void> {
    
    return this.booksService.deleteBookById(id);
  }

  @Post('/:id')
  updateBookById(
    @Param('id') id: string,
    @Body() updateBookDto: UpdateBookDto,
  ): Promise<Book> {
    return this.booksService.updateBookById(id, updateBookDto);
  }
}
