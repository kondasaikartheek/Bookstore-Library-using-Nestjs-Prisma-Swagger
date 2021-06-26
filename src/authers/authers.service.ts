import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid';



import { title } from 'process';
import { async } from 'rxjs/internal/scheduler/async';
import { UpdateAutherDto } from './dto/update-auther.dto';

import { CreateAutherDto } from './dto/create.auther.dto';
import { PrismaService } from 'src/Prisma.service';
import { Author } from '@prisma/client';
import { throwError } from 'rxjs';
import { error } from 'console';


@Injectable()
export class AuthersService {
  CreateautherDto(createAutherDto: CreateAutherDto): Promise<Author> {
    throw new Error('Method not implemented.');
  }
  
 

  constructor(private readonly prisma:PrismaService){}


  async getAutherById(id: string):Promise< Author> {

    const findAuther = await this.prisma.author.findFirst({where:{id:id}});

    if (!findAuther) {
      
      throw new NotFoundException(`auther with id = '${id}' not found`);
    }

    return findAuther;
  }

  async createAuther(createAutherDto: CreateAutherDto):Promise< Author> {
    const {
     
     language,
     name,
     
     
     
     
    }=createAutherDto;
    try{
   const auther= await this.prisma.author.create({data:{language:language,name:name,
   }});
    return auther;
  }catch(error){
    throw error
    
  }
  }

  async deleteAutherById(id: string): Promise<void> {
    
 
await this.prisma.author.delete({where:{id:id}});

return;
  }

  async updateAutherById(id: string, updateAutherDto: UpdateAutherDto): Promise<Author> {

    const {Id,language,name} = updateAutherDto;

     const author= await this.prisma.author.update({where:{id:id},data:{
        id:id!=null ?id:undefined,
        language:language,
       
       
  
  
      }});

      return author;
  
  }
}
