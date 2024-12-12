import { IsString, IsNotEmpty, IsOptional, IsInt } from 'class-validator';

export class SaveHseDto {
  @IsInt()
  @IsNotEmpty()
  employeeId: number;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  signature: string;

  @IsInt()
  @IsNotEmpty()
  HSE_instructionId: number;

}
