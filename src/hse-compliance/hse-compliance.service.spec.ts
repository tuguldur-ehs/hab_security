import { Test, TestingModule } from '@nestjs/testing';
import { HseComplianceService } from './hse-compliance.service';

describe('HseComplianceService', () => {
  let service: HseComplianceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HseComplianceService],
    }).compile();

    service = module.get<HseComplianceService>(HseComplianceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
