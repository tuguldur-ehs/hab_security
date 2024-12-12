import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/api/prisma/prisma.service';
import { SaveHseDto } from './dto/savesign_hse.dto'; 

@Injectable()
export class HseComplianceService {
  constructor(private readonly prisma: PrismaService) {}

  // POST: Save a new compliance history
  async saveCompliance(data: SaveHseDto) {
    const { employeeId, location, signature, HSE_instructionId } = data;
    return this.prisma.hSE_compliance_history.create({
      data: {
        employee_id: employeeId,
        location,
        signature,
        HSE_instruction_id: HSE_instructionId
      },
    });
  }

  // GET: Retrieve all compliance histories
  async getAllComplianceHistories() {
    return this.prisma.hSE_compliance_history.findMany({
      include: {
        employee: true, // Include related employee information if needed
        HSE_instruction: true, // Include related instruction details if needed
      },
    });
  }

  // GET: Retrieve a single compliance history by ID
  async getComplianceById(complianceId: number) {
    return this.prisma.hSE_compliance_history.findUnique({
      where: { compliance_id: complianceId },
      include: {
        employee: true,
        HSE_instruction: true,
      },
    });
  }
}
