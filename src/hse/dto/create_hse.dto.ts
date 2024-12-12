import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateHseDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional() // Optional field
  @IsString()
  photo_url?: string;

  @IsOptional() // Optional field
  @IsString()
  audio_url?: string;
}
