import { PartialType } from '@nestjs/swagger';
import { CreateBookDto } from './create-book.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  @ApiPropertyOptional({ description: 'The title of the book' })
  title?: string;

  @ApiPropertyOptional({ description: 'The author of the book' })
  author?: string;

  @ApiPropertyOptional({ description: 'The ISBN of the book' })
  isbn?: string;
}
