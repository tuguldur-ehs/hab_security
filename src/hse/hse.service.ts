import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/api/prisma/prisma.service'; // Adjust the path if necessary
import { CreateHseDto } from './dto/create_hse.dto'; // Adjust the path if necessary

@Injectable()
export class HseService {
  constructor(private readonly prisma: PrismaService) {}

  // Existing method to create HSE_instruction
  async create(createHseDto: CreateHseDto, employee_id: number) {
    try {
      const hseInstruction = await this.prisma.hSE_instruction.create({
        data: {
          title: createHseDto.title,
          type: createHseDto.type,
          description: createHseDto.description,
          photo_url: createHseDto.photo_url,
          audio_url: createHseDto.audio_url,
          employee_id,
        },
      });

      return hseInstruction;
    } catch (error) {
      throw new Error('Error creating HSE instruction: ' + error.message);
    }
  }

  // New method to fetch HSE_instruction by ID
  async findById(id: number) {
    try {
      const hseInstruction = await this.prisma.hSE_instruction.findUnique({
        where: { HSE_instruction_id: id },
        include: {
          employee: true, // Include employee relation if needed
        },
      });

      if (!hseInstruction) {
        throw new Error(`HSE instruction with ID ${id} not found.`);
      }

      return hseInstruction;
    } catch (error) {
      throw new Error(`Error fetching HSE instruction: ${error.message}`);
    }
  }
}
