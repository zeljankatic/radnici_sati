import { Module } from '@nestjs/common';
import { RadniSatiService } from './radni_sati.service';
import { RadniSatiController } from './radni_sati.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RadniSati } from './entities/radni_sati.entity';

@Module({
  imports:[TypeOrmModule.forFeature([RadniSati])],
  controllers: [RadniSatiController],
  providers: [RadniSatiService],
})
export class RadniSatiModule {}
