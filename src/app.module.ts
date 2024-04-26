import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [EmployeeModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
