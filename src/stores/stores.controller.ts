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
import { Store } from '@prisma/client';

import { CreateStoreDto } from './dto/create.store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { StoresService } from './stores.service';
  
  
  @Controller('stores')
  export class StoresController {
    constructor(private storesService: StoresService) {}
  
  
  
    @Get('/:id')
    getStoreById(@Param('id') id: string):Promise< Store> {
      return this.storesService.getStoreById(id);
    }
  
   
    @Post()
    @UsePipes(ValidationPipe)
    createStore(@Body() createStoreDto: CreateStoreDto): Promise<Store> {
      return this.storesService.createStore(createStoreDto);
    }
  
    @Delete('/:id')
    @ApiParam({name:'id'})
    deleteStoreById(@Param('id') id: string):Promise <void> {
      
      return this.storesService.deleteStoreById(id);
    }
  
    @Post('/:id')
    updateStoreById(
      @Param('id') id: string,
      @Body() updateStoreDto: UpdateStoreDto,
    ): Promise<Store> {
      return this.storesService.updateStoreById(id, updateStoreDto);
    }
  }
  