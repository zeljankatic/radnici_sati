import { Injectable } from '@nestjs/common';
import { CreateRadniSatiDto } from './dto/create-radni_sati.dto';
import { UpdateRadniSatiDto } from './dto/update-radni_sati.dto';
import { RadniSati } from './entities/radni_sati.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RadniSatiService {

  constructor(
    @InjectRepository (RadniSati)
private satiRepository: Repository<RadniSati>,

  ){}

  create(createRadniSatiDto: CreateRadniSatiDto) {
    return this.satiRepository.save(createRadniSatiDto)
  }

  findAll(): Promise<RadniSati[]>{
    return this.satiRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} radniSati`;
  }

  update(id: number, updateRadniSatiDto: UpdateRadniSatiDto) {
    return `This action updates a #${id} radniSati`;
  }

  remove(id: number) {
    return `This action removes a #${id} radniSati`;
  }
}
