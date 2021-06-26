import { PrismaService } from './Prisma.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [PrismaService],
  controllers: [],
})
export class PrismaModule {}
