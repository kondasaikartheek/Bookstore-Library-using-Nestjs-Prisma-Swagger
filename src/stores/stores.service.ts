import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid';

import { PrismaService } from '../prisma.service';

import { title } from 'process';
import { async } from 'rxjs/internal/scheduler/async';

import { CreateStoreDto } from './dto/create.store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { identity } from 'rxjs';
import { Store } from '@prisma/client';

@Injectable()
export class StoresService {
 

  constructor(private readonly prisma:PrismaService){}


  async getStoreById(id: string):Promise< Store> {
  const findStore = await this.prisma.store.findFirst({where:{id:id}});

    if (!findStore) {
      
      throw new NotFoundException(`Store with id = '${id}' not found`);
    }

    return findStore;
  }



  async createStore(createStoreDto: CreateStoreDto):Promise<Store> {
    const {

       address,
       city,
      
    }=createStoreDto;

    try {
      const store= await this.prisma.store.create({data:{address:address,city:city
      }});
   return store;
    } catch (error) {
      throw error
    }
 
  }



  async deleteStoreById(id: string): Promise<void> {
    
 
await this.prisma.store.delete({where:{id:id}});

return;
  }



  async updateStoreById(id: string, updateStoreDto: UpdateStoreDto): Promise<Store> {

    const {Id,address,city} = updateStoreDto;


     
      const store = await this.prisma.store.update({where:{id:id},data:{
        id:id!=null ?id:undefined,
      
        address:address, 
  
  
      }});
  

    return store;
  }
}

