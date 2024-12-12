import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { HseComplianceService } from './hse-compliance.service';
import { SaveHseDto } from './dto/savesign_hse.dto';

@Controller('hse-compliance')
export class HseComplianceController {
  constructor(private readonly hseComplianceService: HseComplianceService) {}

  // POST: Save compliance history
  @Post()
  async saveCompliance(@Body() saveHseDto: SaveHseDto) {
    return this.hseComplianceService.saveCompliance(saveHseDto);
  }

  // GET: Retrieve all compliance histories
  @Get()
  async getAllComplianceHistories() {
    return this.hseComplianceService.getAllComplianceHistories();
  }

  // GET: Retrieve a specific compliance history by ID
  @Get(':id')
  async getComplianceById(@Param('id', ParseIntPipe) id: number) {
    return this.hseComplianceService.getComplianceById(id);
  }
}
