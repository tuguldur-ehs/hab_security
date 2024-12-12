import { Module } from '@nestjs/common';
import { HseComplianceController } from './hse-compliance.controller';
import { HseComplianceService } from './hse-compliance.service';

@Module({
  controllers: [HseComplianceController],
  providers: [HseComplianceService]
})
export class HseComplianceModule {}
