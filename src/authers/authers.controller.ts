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
  
  import { ApiParam } from '@nestjs/swagger';
import { Author } from '@prisma/client';

 
import { AuthersService } from './authers.service';
import { CreateAutherDto} from './dto/create.auther.dto';
import { UpdateAutherDto } from './dto/update-auther.dto';
  
  @Controller('auther')
  export class AuthersController {
    constructor(private authersService: AuthersService) {}
  
  
  
    /*@Get()
    getBooks(@Query() filterDto: GetBooksFilterDto): Book[] {
     
      if (Object.keys(filterDto).length) {
        return this.booksService.getFilteredBooks(filterDto);
      }
  
    
      return this.booksService.getAllBooks();
    }*/
  
    @Get('/:id')
    getAutherById(@Param('id') id: string):Promise<Author> {
      return this.authersService.getAutherById(id);
    }
  
   
    @Post()
    @UsePipes(ValidationPipe)
    createAuther(@Body() createAutherDto: CreateAutherDto): Promise<Author> {
      return this.authersService.createAuther(createAutherDto);
    }
  
    @Delete('/:id')
    @ApiParam({name:'id'})
    deleteAutherById(@Param('id') id: string):Promise <void> {
      
      return this.authersService.deleteAutherById(id);
    }
    @Post('/:id')
  updateAutherById(
    @Param('id') id: string,
    @Body() updateAutherDto: UpdateAutherDto,
  ): Promise<Author> {
    return this.authersService.updateAutherById(id, updateAutherDto);
  }
  
   

      
  }
  