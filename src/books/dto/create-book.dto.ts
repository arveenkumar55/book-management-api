import { IsString, IsNotEmpty, IsISBN } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({ description: 'The title of the book' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'The author of the book' })
  @IsString()
  @IsNotEmpty()
  author: string;

  @ApiProperty({ description: 'The ISBN of the book' })
  @IsISBN()
  isbn: string;
}
