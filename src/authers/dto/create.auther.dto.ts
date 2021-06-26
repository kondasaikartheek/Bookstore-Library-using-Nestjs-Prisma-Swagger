import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString, MaxLength } from 'class-validator';
import { stat } from 'fs';






export class CreateAutherDto {


  @IsNotEmpty()
  @ApiProperty({example:'test'})
  name: string;

  @IsNotEmpty()
  @ApiProperty({example:'test'})
  language: string;

  @IsNotEmpty()
  @ApiProperty({example:'test'})
  books: string;

 

 

  
 
  
  
}
