import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import {  BookStatus } from './book.model';
import { CreateBookDto } from './dto/create-book.dto';

import { GetBooksFilterDto } from './dto/get-books-filter.dto';
import { PrismaService } from '../prisma.service';


import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from '@prisma/client';

@Injectable()
export class BooksService {
  books: any;
 

  constructor(private readonly prisma:PrismaService){}


  async getBookById(id: string):Promise<Book> {

    const findBook = await this.prisma.book.findFirst({where:{id:id}});

    if (!findBook) {
      
      throw new NotFoundException(`Book with id = '${id}' not found`);
    }

    
    return findBook;
  }

  async createBook(createBookDto: CreateBookDto):Promise<Book> {
    const {
      title,
      published,
     storeId,
     authorId,

      
     
      
    }=createBookDto;

   const book= await this.prisma.book.create({data:
    {title:title,published:published, 
      store:{connect:{id:storeId}},
      author:{connect:{id:authorId}}
    },
      });
    return book;
  }

  async deleteBookById(id: string): Promise<void> {
    
   // const foundBook = this.getBookById(id);
  // this.books = this.books.filter(book => book.id !== foundBook.id);
await this.prisma.book.delete({where:{id:id}});

return;
  }

 async updateBookById(id: string, updateBookDto: UpdateBookDto): Promise<Book> {

  const {published,title} = updateBookDto;
   
    const book = await this.prisma.book.update({where:{id:id},data:{
      id:id !=null ?id:undefined, 

   
      published:published,


    }});

  

    return book;
  }
}

