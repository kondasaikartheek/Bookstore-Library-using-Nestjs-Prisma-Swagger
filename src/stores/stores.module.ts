import { Module } from '@nestjs/common';

import { PrismaService } from 'src/Prisma.service';
import { StoresController } from './stores.controller';
import { StoresService } from './stores.service';


@Module({
  controllers: [StoresController],
  providers: [StoresService,PrismaService]
})
export class StoresModule {}
