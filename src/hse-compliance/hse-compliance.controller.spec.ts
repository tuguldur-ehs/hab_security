import { Test, TestingModule } from '@nestjs/testing';
import { HseComplianceController } from './hse-compliance.controller';

describe('HseComplianceController', () => {
  let controller: HseComplianceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HseComplianceController],
    }).compile();

    controller = module.get<HseComplianceController>(HseComplianceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
