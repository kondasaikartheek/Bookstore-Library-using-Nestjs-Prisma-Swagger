import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';







export class CreateStoreDto {


  @IsNotEmpty()
  @ApiProperty({example:'test'})
  address: string;

  @IsNotEmpty()
  @ApiProperty({example:'test'})
  city: string;

  @IsNotEmpty()
  @ApiProperty({example:'test'})
  books: string;
  
  
}

