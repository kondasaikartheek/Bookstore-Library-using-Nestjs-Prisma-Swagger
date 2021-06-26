import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { AuthersModule } from './authers/authers.module';
import { BooksModule } from './books/books.module';
import { PrismaModule } from './prisma.module';
import { StoresModule } from './stores/stores.module';

@Module({
  imports: [PrismaModule,StoresModule,BooksModule,AuthersModule],
 
  providers: [AppService],
})
export class AppModule {}
