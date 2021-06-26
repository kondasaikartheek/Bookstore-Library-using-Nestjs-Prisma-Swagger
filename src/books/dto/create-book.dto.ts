import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString, MaxLength } from 'class-validator';
import { BookStatus } from '../book.model';




export class CreateBookDto {
 
  @IsNotEmpty()
  @ApiProperty({example:'test'})
  title: string;

  @IsNotEmpty()
  @ApiProperty({example:'test'})
  published: string;

  @IsNotEmpty()
  @ApiProperty({example:'test'})
  storeId: string;

  @IsNotEmpty()
  @ApiProperty({example:'test'})
  authorId: string;
  

  
  

  

  
}
