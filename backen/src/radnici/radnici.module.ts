import { Module } from '@nestjs/common';
import { RadniciService } from './radnici.service';
import { RadniciController } from './radnici.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Radnici } from './entities/radnici.entity';

@Module({
  controllers: [RadniciController],
  providers: [RadniciService],
  imports:[TypeOrmModule.forFeature([Radnici])]
})
export class RadniciModule {}
