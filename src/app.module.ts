import { Module } from '@nestjs/common';
import { AuthModule } from './api/auth/auth.module';
import { UserModule } from './api/user/user.module';

import { PrismaModule } from './api/prisma/prisma.module';
import { HseModule } from './hse/hse.module';
import { HseComplianceModule } from './hse-compliance/hse-compliance.module';



@Module({
  imports: [AuthModule, UserModule, PrismaModule, HseModule, HseComplianceModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
