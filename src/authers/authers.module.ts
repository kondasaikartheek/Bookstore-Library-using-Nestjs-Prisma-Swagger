import { Module } from '@nestjs/common';
import { BooksModule } from 'src/books/books.module';
import { PrismaService } from 'src/Prisma.service';
import { StoresModule } from 'src/stores/stores.module';

import { AuthersController } from './authers.controller';
import { AuthersService } from './authers.service';

@Module({
  controllers: [AuthersController],
  providers: [AuthersService,PrismaService,BooksModule,StoresModule]
})
export class AuthersModule {}
