import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Auth } from './entity/auth.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';

@Module({
  controllers:[AuthController],
  providers: [AuthService],
  imports:[TypeOrmModule.forFeature ([Auth])]
})
export class AuthModule {}
